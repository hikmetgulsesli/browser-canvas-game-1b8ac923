import {
  BrowserCanvasGameProvider,
  useBrowserCanvasGame,
} from "./features/prod-browser-canvas-game/prod-browser-canvas-game.store";
import { gameMessageFor } from "./features/surf-play-page/act_start_game";
import { PlayPageBrowserCanvasGame } from "./screens/PlayPageBrowserCanvasGame";

function PlayRoute() {
  const { snapshot, startGame } = useBrowserCanvasGame();

  return (
    <PlayPageBrowserCanvasGame
      highScore={snapshot.states.STATE_HIGH_SCORE}
      gameMessage={gameMessageFor(snapshot)}
      actions={{
        "start-1": () => {
          startGame();
        },
      }}
    />
  );
}

export default function App() {
  return (
    <BrowserCanvasGameProvider>
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-slate-950 text-slate-100"
      >
        <PlayRoute />
      </div>
    </BrowserCanvasGameProvider>
  );
}
