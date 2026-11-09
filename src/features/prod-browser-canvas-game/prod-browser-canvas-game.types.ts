export type ApplicationStatus = "ready" | "playing";

export interface BrowserCanvasGameStates {
  STATE_APPLICATION_STATUS: ApplicationStatus;
  STATE_HIGH_SCORE: number | null;
}

export interface BrowserCanvasGameSnapshot {
  states: BrowserCanvasGameStates;
}

export interface BrowserCanvasGameStore {
  getSnapshot: () => BrowserCanvasGameSnapshot;
  subscribe: (listener: () => void) => () => void;
  startGame: () => BrowserCanvasGameSnapshot;
}
