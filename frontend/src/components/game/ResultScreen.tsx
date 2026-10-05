interface ResultScreenProps {
  username: string;
  score: number;
  total: number;
  onPlayAgain: () => void;
}

export const ResultScreen = ({
  username,
  score,
  total,
  onPlayAgain,
}: ResultScreenProps) => {
  const pct = (score / total) * 100;
  let verdict = "Keep practicing!";
  if (pct === 100) verdict = "Flawless victory!";
  else if (pct >= 70) verdict = "Tech wizard!";
  else if (pct >= 40) verdict = "Solid run!";

  return (
    <div
      className="flex flex-col items-center gap-8 text-center fade-in"
      data-testid="result-screen"
    >
      <p className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#B026FF] uppercase">
        Game Over
      </p>

      <h2 className="font-pixel text-lg sm:text-xl text-[#00F0FF] neon-cyan">
        {verdict}
      </h2>

      <div className="flex flex-col items-center gap-2">
        <span className="font-body text-sm text-[#A1A1AA]">Player</span>
        <span
          className="font-body text-xl font-semibold text-[#F6F7FF]"
          data-testid="result-username"
        >
          {username}
        </span>
      </div>

      <div className="flex flex-col items-center gap-3 border-4 border-[#B026FF]/50 bg-[#0B1020] px-10 py-8 shadow-[0_0_30px_rgba(176,38,255,0.25)]">
        <span className="font-pixel text-[10px] text-[#A1A1AA] uppercase tracking-wider">
          Final Score
        </span>
        <span
          className="font-pixel text-4xl sm:text-5xl text-[#00FF41] neon-green leading-none"
          data-testid="result-score"
        >
          {score}/{total}
        </span>
        <span className="font-body text-sm text-[#A1A1AA]">
          {score} correct answer{score === 1 ? "" : "s"} out of {total}
        </span>
      </div>

      <button
        type="button"
        onClick={onPlayAgain}
        data-testid="play-again-btn"
        className="w-full max-w-xs border-4 border-[#00F0FF] bg-[#00F0FF]/10 px-6 py-4 font-pixel text-xs sm:text-sm text-[#00F0FF] rounded-none transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:bg-[#00F0FF]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]"
      >
        Play Again
      </button>
    </div>
  );
};
