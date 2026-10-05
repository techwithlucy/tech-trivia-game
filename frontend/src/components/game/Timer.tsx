import { QUESTION_TIME } from "@/hooks/useTriviaGame";

interface TimerProps {
  timeLeft: number;
}

export const Timer = ({ timeLeft }: TimerProps) => {
  const isWarning = timeLeft <= 10;
  const pct = Math.max(0, (timeLeft / QUESTION_TIME) * 100);

  return (
    <div className="flex flex-col items-end gap-2" data-testid="timer">
      <div
        className={`font-pixel text-lg sm:text-xl leading-none ${
          isWarning
            ? "text-[#FF003C] animate-pulse neon-red"
            : "text-[#00F0FF] neon-cyan"
        }`}
        data-testid="timer-value"
      >
        {String(timeLeft).padStart(2, "0")}s
      </div>
      <div className="h-2 w-24 sm:w-32 bg-black/60 border-2 border-[#3F3F46] overflow-hidden">
        <div
          className={`h-full transition-[width] duration-1000 ease-linear ${
            isWarning ? "bg-[#FF003C]" : "bg-[#00F0FF]"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};
