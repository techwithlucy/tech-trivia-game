import { useCallback, useEffect, useState } from "react";
import { GamePhase, Question } from "@/types/trivia";

export const QUESTION_TIME = 30;
export const REVEAL_DELAY_MS = 3000;

export function useTriviaGame(questions: Question[]) {
  const [phase, setPhase] = useState<GamePhase>("start");
  const [username, setUsername] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);

  const current = questions[currentIndex];

  const startGame = useCallback((name: string) => {
    setUsername(name.trim());
    setCurrentIndex(0);
    setScore(0);
    setSelectedIndex(null);
    setIsRevealed(false);
    setTimeLeft(QUESTION_TIME);
    setPhase("playing");
  }, []);

  const reveal = useCallback(
    (selection: number | null) => {
      setSelectedIndex(selection);
      setIsRevealed(true);
      if (selection !== null && selection === current.correctIndex) {
        setScore((s) => s + 1);
      }
    },
    [current],
  );

  const selectAnswer = useCallback(
    (index: number) => {
      if (isRevealed) return;
      reveal(index);
    },
    [isRevealed, reveal],
  );

  const restart = useCallback(() => {
    setPhase("start");
    setCurrentIndex(0);
    setScore(0);
    setSelectedIndex(null);
    setIsRevealed(false);
    setTimeLeft(QUESTION_TIME);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (phase !== "playing" || isRevealed) return;
    if (timeLeft <= 0) {
      reveal(null);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
  }, [phase, isRevealed, timeLeft, reveal]);

  // Auto-advance after showing the result
  useEffect(() => {
    if (phase !== "playing" || !isRevealed) return;
    const timer = setTimeout(() => {
      if (currentIndex + 1 >= questions.length) {
        setPhase("finished");
      } else {
        setCurrentIndex((i) => i + 1);
        setSelectedIndex(null);
        setIsRevealed(false);
        setTimeLeft(QUESTION_TIME);
      }
    }, REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [isRevealed, phase, currentIndex, questions.length]);

  return {
    phase,
    username,
    currentIndex,
    score,
    selectedIndex,
    isRevealed,
    timeLeft,
    current,
    total: questions.length,
    startGame,
    selectAnswer,
    restart,
  };
}
