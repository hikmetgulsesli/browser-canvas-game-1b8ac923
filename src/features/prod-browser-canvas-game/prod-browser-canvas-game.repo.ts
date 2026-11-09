export const HIGH_SCORE_STORAGE_KEY =
  "setfarm.browser_canvas_game.high_score_local_storage.v1";

interface StoredGameProgress {
  highScore: number;
}

function browserStorage(): Storage | null {
  return typeof window === "undefined" ? null : window.localStorage;
}

export function readHighScore(): number | null {
  const storage = browserStorage();
  if (storage === null) return null;

  try {
    const serialized = storage.getItem(HIGH_SCORE_STORAGE_KEY);
    if (serialized === null) return null;

    const parsed: unknown = JSON.parse(serialized);
    if (typeof parsed === "number" && Number.isFinite(parsed)) {
      return parsed;
    }

    if (typeof parsed === "object" && parsed !== null) {
      const highScore = (parsed as Partial<StoredGameProgress>).highScore;
      if (typeof highScore === "number" && Number.isFinite(highScore)) {
        return highScore;
      }
    }
  } catch {
    // Missing, unavailable, or malformed storage rehydrates as no score.
  }

  return null;
}

export function writeHighScore(highScore: number): void {
  const storage = browserStorage();
  if (storage === null) return;

  const progress: StoredGameProgress = { highScore };
  storage.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify(progress));
}
