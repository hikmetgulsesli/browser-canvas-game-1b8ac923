import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { createProdBrowserCanvasGameFixture } from "../../__fixtures__/prod-browser-canvas-game.fixture";
import { applyStartGame } from "../surf-play-page/act_start_game";
import { installSetfarmTestBridge } from "../../test/bridge";
import {
  readHighScore,
  writeHighScore,
} from "./prod-browser-canvas-game.repo";
import type {
  BrowserCanvasGameSnapshot,
  BrowserCanvasGameStore,
} from "./prod-browser-canvas-game.types";

interface BrowserCanvasGameContextValue {
  snapshot: BrowserCanvasGameSnapshot;
  startGame: () => BrowserCanvasGameSnapshot;
}

const BrowserCanvasGameContext =
  createContext<BrowserCanvasGameContextValue | null>(null);

function createBrowserCanvasGameStore(): BrowserCanvasGameStore {
  let snapshot = createProdBrowserCanvasGameFixture(readHighScore());
  const listeners = new Set<() => void>();

  return {
    getSnapshot: () => snapshot,
    subscribe: (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    startGame: () => {
      const next = applyStartGame(snapshot);
      writeHighScore(0);
      snapshot = next;
      listeners.forEach((listener) => listener());
      return snapshot;
    },
  };
}

export function BrowserCanvasGameProvider({
  children,
}: {
  children: ReactNode;
}) {
  const storeRef = useRef<BrowserCanvasGameStore | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createBrowserCanvasGameStore();
  }
  const store = storeRef.current;
  const snapshot = useSyncExternalStore(store.subscribe, store.getSnapshot);

  useEffect(() => installSetfarmTestBridge(store), [store]);

  const value = useMemo(
    () => ({ snapshot, startGame: store.startGame }),
    [snapshot, store],
  );

  return (
    <BrowserCanvasGameContext.Provider value={value}>
      {children}
    </BrowserCanvasGameContext.Provider>
  );
}

export function useBrowserCanvasGame(): BrowserCanvasGameContextValue {
  const value = useContext(BrowserCanvasGameContext);
  if (value === null) {
    throw new Error("BrowserCanvasGameProvider is required");
  }
  return value;
}
