import type { BrowserCanvasGameSnapshot } from "../features/prod-browser-canvas-game/prod-browser-canvas-game.types";

export function createProdBrowserCanvasGameFixture(
  highScore: number | null = null,
): BrowserCanvasGameSnapshot {
  return {
    states: {
      STATE_APPLICATION_STATUS: "ready",
      STATE_HIGH_SCORE: highScore,
    },
  };
}
