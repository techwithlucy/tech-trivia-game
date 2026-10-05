import { useState } from "react";

interface StartScreenProps {
  onStart: (username: string) => void;
}

export const StartScreen = ({ onStart }: StartScreenProps) => {
  const [name, setName] = useState("");
  const trimmed = name.trim();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    onStart(trimmed);
  };

  return (
    <div
      className="flex flex-col items-center gap-10 fade-in"
      data-testid="start-screen"
    >
      <div className="text-center space-y-4">
        <p className="font-body text-xs sm:text-sm tracking-[0.3em] text-[#B026FF] uppercase">
          Insert Coin
        </p>
        <h1
          className="font-pixel text-2xl sm:text-3xl lg:text-4xl leading-relaxed text-[#00F0FF] neon-cyan"
          data-testid="game-title"
        >
          Lucy&apos;s
          <br />
          <span className="text-[#B026FF] neon-purple">Tech Trivia</span>
          <br />
          Game
        </h1>
        <p className="font-body text-sm text-[#A1A1AA] max-w-sm mx-auto pt-2">
          10 questions on AWS, cloud, AI &amp; tech. 30 seconds each. 1 point per
          correct answer. Think fast.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-6"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="username"
            className="font-pixel text-[10px] text-[#00F0FF] uppercase tracking-wider"
          >
            Player Name
          </label>
          <input
            id="username"
            type="text"
            value={name}
            maxLength={20}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            autoComplete="off"
            data-testid="username-input"
            className="w-full border-2 border-[#B026FF] bg-transparent px-4 py-3 font-body text-base text-white placeholder:text-[#71717A] rounded-none transition-shadow duration-200 focus:outline-none focus:border-[#00F0FF] focus:shadow-[0_0_10px_rgba(0,240,255,0.5)]"
          />
        </div>

        <button
          type="submit"
          disabled={!trimmed}
          data-testid="start-game-btn"
          className="w-full border-4 border-[#00F0FF] bg-[#00F0FF]/10 px-6 py-4 font-pixel text-xs sm:text-sm text-[#00F0FF] rounded-none transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:bg-[#00F0FF]/20 hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Start Game
        </button>
      </form>
    </div>
  );
};
