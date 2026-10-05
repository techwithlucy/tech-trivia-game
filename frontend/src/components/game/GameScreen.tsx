import { Question } from "@/types/trivia";
import { AnswerButton } from "@/components/game/AnswerButton";
import { Timer } from "@/components/game/Timer";

interface GameScreenProps {
  question: Question;
  questionNumber: number;
  total: number;
  score: number;
  timeLeft: number;
  selectedIndex: number | null;
  isRevealed: boolean;
  onSelect: (index: number) => void;
}

export const GameScreen = ({
  question,
  questionNumber,
  total,
  score,
  timeLeft,
  selectedIndex,
  isRevealed,
  onSelect,
}: GameScreenProps) => {
  const wasCorrect = selectedIndex === question.correctIndex;

  return (
    <div className="flex flex-col gap-6 fade-in" data-testid="game-screen">
      {/* Header: progress, score, timer */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span
            className="font-pixel text-[10px] text-[#A1A1AA] uppercase tracking-wider"
            data-testid="question-progress"
          >
            Q {questionNumber}/{total}
          </span>
          <span
            className="font-pixel text-lg sm:text-xl text-[#B026FF] neon-purple leading-none"
            data-testid="score-display"
          >
            {score} PTS
          </span>
        </div>
        <Timer timeLeft={timeLeft} />
      </div>

      <span className="inline-block w-fit border-2 border-[#3F3F46] px-3 py-1 font-body text-[10px] uppercase tracking-widest text-[#00F0FF]">
        {question.category}
      </span>

      {/* Question */}
      <h2
        className="font-body text-lg sm:text-xl font-semibold leading-relaxed text-[#F6F7FF]"
        data-testid="question-text"
      >
        {question.question}
      </h2>

      {/* Answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option, index) => (
          <AnswerButton
            key={index}
            label={option}
            index={index}
            isRevealed={isRevealed}
            isSelected={selectedIndex === index}
            isCorrect={index === question.correctIndex}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>

      {/* Feedback */}
      {isRevealed && (
        <div
          className="flex flex-col gap-2 border-l-4 pl-4 py-2 fade-in"
          style={{
            borderColor:
              selectedIndex === null ? "#FF003C" : wasCorrect ? "#00FF41" : "#FF003C",
          }}
          data-testid="feedback-box"
        >
          <p
            className={`font-pixel text-xs ${
              wasCorrect ? "text-[#00FF41]" : "text-[#FF003C]"
            }`}
            data-testid="feedback-result"
          >
            {selectedIndex === null
              ? "Time's up!"
              : wasCorrect
                ? "Correct!"
                : "Wrong!"}
          </p>
          <p className="font-body text-sm text-[#A1A1AA] leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
};
