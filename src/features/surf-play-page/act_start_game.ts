import type { BrowserCanvasGameSnapshot } from "../prod-browser-canvas-game/prod-browser-canvas-game.types";

export const ACT_START_GAME = "ACT_START_GAME" as const;
export const GAME_STARTED_MESSAGE = "Game started";

export function applyStartGame(
  current: BrowserCanvasGameSnapshot,
): BrowserCanvasGameSnapshot {
  return {
    states: {
      ...current.states,
      STATE_APPLICATION_STATUS: "playing",
      STATE_HIGH_SCORE: 0,
    },
  };
}

export function gameMessageFor(
  snapshot: BrowserCanvasGameSnapshot,
): string {
  return snapshot.states.STATE_APPLICATION_STATUS === "playing"
    ? GAME_STARTED_MESSAGE
    : "";
}
