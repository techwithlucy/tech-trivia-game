# Lucy's Tech Trivia Game — PRD

## Original Problem Statement
Build a single-player tech trivia game using React and TypeScript. Dark retro arcade theme (near-black bg, neon purple/cyan, pixel borders), pixel font for headings + readable font for Q&A, compact centered panel, large animated answer buttons, countdown that changes colour when time runs low, responsive. Start screen (title "Lucy's Tech Trivia Game", username field, Start button), 10 hardcoded MCQs (AWS, cloud, AI, general tech), one question at a time with number/score/30s timer, one answer per question, reveal correct answer + explanation after submit or timeout, 1 pt per correct (max 10), result shown 3s then auto-advance, final screen with username/score/correct-count/Play Again. All local, no backend. Components modular for later multiplayer.

## User Choices
- TypeScript (.tsx) frontend — converted template from JS to TS
- No sound (visuals only)
- Session-based only (no localStorage persistence)

## Architecture
- Frontend-only React 19 + TypeScript, Tailwind CSS. No backend, no DB.
- State machine in `src/hooks/useTriviaGame.ts` (phases: start / playing / finished; 30s countdown, 3s reveal auto-advance).
- Modular components: `StartScreen`, `GameScreen`, `AnswerButton`, `Timer`, `ResultScreen` under `src/components/game/`.
- Data in `src/data/questions.ts`, types in `src/types/trivia.ts`.
- Hook + component separation lets gameplay logic be reused for a future multiplayer version.

## Implemented (2026-06)
- Retro arcade UI: Press Start 2P headings, Fira Code body, neon glow, CRT scanlines, fade transitions.
- Start screen with validated username input (Start disabled until name entered).
- 10 hardcoded AWS/cloud/AI/tech questions, 4 options each, with explanations.
- Per-question header (Q x/10, live score, colour-shifting 30s countdown that turns red + pulses under 10s).
- One answer per question; reveal highlights correct (green) / wrong (red) + Correct!/Wrong!/Time's up! + explanation.
- 1 point per correct, auto-advance after 3s, timeout path handled.
- Results screen: username, score X/10, correct count, verdict, Play Again reset.
- Verified end-to-end by testing agent (100% frontend pass).

## Backlog / Future
- P1: Multiplayer mode (reuse hook + components, add lobby/turns, backend for rooms).
- P2: Local high-score leaderboard (localStorage) — explicitly deferred by user.
- P2: Sound effects — explicitly deferred by user.
- P2: Question randomization / larger question bank / difficulty levels.
