// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Browser Canvas Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageBrowserCanvasGameActionId = "start-1";

export interface PlayPageBrowserCanvasGameProps {
  actions?: {
    "start-1"?: () => void;
  };
  highScore?: number | null;
  gameMessage?: string;
}

export type PlayPageBrowserCanvasGameActionCallbacks = NonNullable<PlayPageBrowserCanvasGameProps["actions"]>;

export function PlayPageBrowserCanvasGame({
  actions,
  highScore = null,
  gameMessage = "",
}: PlayPageBrowserCanvasGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="flex-1 flex flex-col min-h-screen" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_UNCHANGED">
          
          {/* Top Navigation / Header (Non-actionable decorative chrome) */}
          <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-base shadow-lg shadow-cyan-500/20">
                G
              </div>
              <div>
                <h1 className="text-base font-bold tracking-tight text-white">Browser Canvas Game</h1>
                <p className="text-xs text-slate-400">Route: /play</p>
              </div>
            </div>
      
            {/* Status Bar Area / High Score / Status */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm bg-slate-900 border border-slate-800 rounded-lg px-3 py-1.5 shadow-inner">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">High Score:</span>
                {/* Observable: OBS_START_GAME_CURRENT_HIGH_SCORE (role: status, name: Current high score, phase before expected: null) */}
                <span
                  className="font-mono font-bold text-cyan-400"
                  data-setfarm-element-ref="E000002"
                  role="status"
                  aria-label="Current high score"
                  data-observable-refs="OBS_START_GAME_CURRENT_HIGH_SCORE"
                  data-value={highScore === null ? undefined : String(highScore)}
                >
                  {highScore === null ? "--" : highScore}
                </span>
              </div>
      
              {/* Observable: OBS_START_GAME_GAME_STARTED_MESSAGE (role: status, name: Game message, phase after expected: Game started) */}
              <div className="hidden text-sm text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-lg" data-setfarm-element-ref="E000003" role="status" aria-label="Game message" data-observable-refs="OBS_START_GAME_GAME_STARTED_MESSAGE">{gameMessage}</div>
            </div>
          </header>
      
          {/* Main Game Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto p-6 flex flex-col gap-6">
            
            {/* Control Bar */}
            <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/80 rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="font-medium">System Ready</span>
                </div>
                <span className="text-slate-700">|</span>
                <span className="text-xs text-slate-400">Press Start to begin a new canvas simulation</span>
              </div>
      
              <div>
                {/* Action Control Slot: CSLOT_START_GAME_START_BUTTON / ACT_START_GAME */}
                {/* Observable: OBS_START_GAME_START_BUTTON_REMAINS_AVAILABLE (visible_text: Start, enabled, visible) */}
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-cyan-500/25 transition duration-150 ease-in-out cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950" data-setfarm-element-ref="E000004" data-observable-refs="OBS_START_GAME_START_BUTTON_REMAINS_AVAILABLE" data-action-id="start-1" onClick={actions?.["start-1"]}>
                  Start
                </button>
              </div>
            </div>
      
            {/* Game Stage / Host Surface containing SURF_GAME_CANVAS */}
            <div className="flex-1 flex flex-col items-center justify-center bg-slate-900/40 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
              {/* Ambient decorative background grid */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      
              {/* Contained Surface: SURF_GAME_CANVAS */}
              <div data-surface-id="SURF_GAME_CANVAS" className="relative z-10 w-full max-w-4xl aspect-[16/9] bg-slate-950 border-2 border-slate-800 rounded-xl shadow-2xl flex flex-col items-center justify-center overflow-hidden" data-setfarm-element-ref="E000005">
                <canvas className="w-full h-full block bg-slate-950"></canvas>
                
                {/* Overlay placeholder inside Game Canvas */}
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-slate-950/70 backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <span className="text-cyan-400 font-mono text-2xl font-black">#</span>
                  </div>
                  <p className="text-base font-semibold text-slate-200">Interactive Game Canvas Ready</p>
                  <p className="text-xs text-slate-400 mt-1">Render viewport initialized for simulation</p>
                </div>
              </div>
      
              {/* Game Info & Instructions (Non-actionable decorative text) */}
              <div className="mt-6 flex items-center justify-center space-x-8 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">W A S D</span>
                  <span>Movement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">SPACE</span>
                  <span>Action</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 font-mono text-slate-300">ESC</span>
                  <span>Pause</span>
                </div>
              </div>
            </div>
            
          </main>
      
          {/* Footer Chrome (Non-actionable) */}
          <footer className="border-t border-slate-800/80 bg-slate-950 px-6 py-3 text-center text-xs text-slate-400">
            <span>Browser Canvas Game — Desktop Play Arena</span>
          </footer>
      
        </div>
    </>
  );
}
