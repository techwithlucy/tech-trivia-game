import "@/App.css";
import { QUESTIONS } from "@/data/questions";
import { useTriviaGame } from "@/hooks/useTriviaGame";
import { StartScreen } from "@/components/game/StartScreen";
import { GameScreen } from "@/components/game/GameScreen";
import { ResultScreen } from "@/components/game/ResultScreen";

function App() {
  const game = useTriviaGame(QUESTIONS);

  return (
    <div className="arcade-root min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6">
      <main
        className="panel-card relative w-full max-w-2xl border-4 border-[#00F0FF]/50 bg-[#0B1020] shadow-[0_0_30px_rgba(0,240,255,0.15)] px-6 py-8 sm:px-10 sm:py-12"
        data-testid="game-panel"
      >
        <div className="scanlines" aria-hidden="true" />
        <div className="relative z-10">
          {game.phase === "start" && <StartScreen onStart={game.startGame} />}

          {game.phase === "playing" && (
            <GameScreen
              question={game.current}
              questionNumber={game.currentIndex + 1}
              total={game.total}
              score={game.score}
              timeLeft={game.timeLeft}
              selectedIndex={game.selectedIndex}
              isRevealed={game.isRevealed}
              onSelect={game.selectAnswer}
            />
          )}

          {game.phase === "finished" && (
            <ResultScreen
              username={game.username}
              score={game.score}
              total={game.total}
              onPlayAgain={game.restart}
            />
          )}
        </div>
      </main>

      <footer className="mt-6 font-body text-xs text-[#52525B]">
        Single-player build • local only
      </footer>
    </div>
  );
}

export default App;
