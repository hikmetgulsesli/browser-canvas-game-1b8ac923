import { ACT_START_GAME } from "../features/surf-play-page/act_start_game";
import type {
  BrowserCanvasGameSnapshot,
  BrowserCanvasGameStates,
  BrowserCanvasGameStore,
} from "../features/prod-browser-canvas-game/prod-browser-canvas-game.types";

interface ActionInvocation {
  actionRef?: string;
  action?: string;
}

export interface SetfarmTestBridge {
  invokeAction: (
    action: string | ActionInvocation,
    input?: Record<string, never>,
  ) => Promise<BrowserCanvasGameSnapshot>;
  getState: () => BrowserCanvasGameSnapshot;
  getSnapshot: () => BrowserCanvasGameSnapshot;
  captureState: () => BrowserCanvasGameSnapshot;
  readonly state: BrowserCanvasGameSnapshot;
  readonly states: BrowserCanvasGameStates;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
    __SETFARM_SCENARIO_MODE__?: "manual";
  }
}

function actionRefFor(action: string | ActionInvocation): string {
  return typeof action === "string"
    ? action
    : action.actionRef ?? action.action ?? "";
}

export function installSetfarmTestBridge(
  store: BrowserCanvasGameStore,
): () => void {
  const getState = () => store.getSnapshot();
  const bridge: SetfarmTestBridge = {
    invokeAction: async (action) => {
      if (actionRefFor(action) !== ACT_START_GAME) {
        throw new Error(`Unknown action: ${actionRefFor(action)}`);
      }
      return store.startGame();
    },
    getState,
    getSnapshot: getState,
    captureState: getState,
    get state() {
      return store.getSnapshot();
    },
    get states() {
      return store.getSnapshot().states;
    },
  };

  window.__SETFARM_SCENARIO_MODE__ = "manual";
  window.__SETFARM_TEST_BRIDGE__ = bridge;

  return () => {
    if (window.__SETFARM_TEST_BRIDGE__ === bridge) {
      delete window.__SETFARM_TEST_BRIDGE__;
    }
    if (window.__SETFARM_SCENARIO_MODE__ === "manual") {
      delete window.__SETFARM_SCENARIO_MODE__;
    }
  };
}
