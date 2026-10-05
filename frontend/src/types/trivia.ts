export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export type GamePhase = "start" | "playing" | "finished";

export interface PlayerResult {
  username: string;
  score: number;
  total: number;
}
