interface AnswerButtonProps {
  label: string;
  index: number;
  isRevealed: boolean;
  isSelected: boolean;
  isCorrect: boolean;
  onClick: () => void;
}

const LETTERS = ["A", "B", "C", "D"];

export const AnswerButton = ({
  label,
  index,
  isRevealed,
  isSelected,
  isCorrect,
  onClick,
}: AnswerButtonProps) => {
  let stateClasses =
    "border-[#B026FF]/40 bg-[#0B1020] text-[#F6F7FF] hover:border-[#B026FF] hover:-translate-y-1 hover:shadow-[0_0_18px_rgba(176,38,255,0.5)]";

  if (isRevealed) {
    if (isCorrect) {
      stateClasses =
        "border-[#00FF41] bg-[#00FF41]/10 text-[#00FF41] shadow-[0_0_18px_rgba(0,255,65,0.5)]";
    } else if (isSelected) {
      stateClasses =
        "border-[#FF003C] bg-[#FF003C]/10 text-[#FF003C] shadow-[0_0_18px_rgba(255,0,60,0.5)]";
    } else {
      stateClasses = "border-[#3F3F46] bg-[#0B1020] text-[#A1A1AA] opacity-70";
    }
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isRevealed}
      data-testid={`answer-button-${index}`}
      className={`group flex w-full items-center gap-4 border-4 px-4 py-4 sm:px-5 sm:py-5 text-left font-body text-sm sm:text-base rounded-none transition-transform transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] disabled:cursor-default ${stateClasses}`}
    >
      <span className="font-pixel text-xs shrink-0 opacity-80">
        {LETTERS[index]}
      </span>
      <span className="leading-snug">{label}</span>
    </button>
  );
};
