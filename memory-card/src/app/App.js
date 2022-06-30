import { useState } from "react";
import { EntryScreen } from "./components/EntryScreen/EntryScreen";
import { PlayScreen } from "./components/PlayScreen/PlayScreen";
import { ResultScreen } from "./components/ResultScreen/ResultScreen";

const MAX_LEVEL = 6;
const MIN_LEVEL = 1;

const GAME_STATE = {
  notStarted: 0,
  started: 1,
  lost: 2,
  levelUp: 3,
  win: 4,
};

export default function App() {
  const [level, setLevel] = useState(MIN_LEVEL);
  const [gameState, setGameState] = useState(GAME_STATE.notStarted);
  const [bestScore, setBestScore] = useState(0);

  function updateLevel(lvl) {
    if (MIN_LEVEL <= lvl && lvl <= MAX_LEVEL) setLevel(lvl);
  }

  function winHandler() {
    if (level < MAX_LEVEL) {
      setLevel(level + 1);
      setGameState(GAME_STATE.levelUp);
      setTimeout(() => {
        setGameState(GAME_STATE.started);
      }, 2000);
    } else {
      setGameState(GAME_STATE.win);
    }
  }

  switch (gameState) {
    case GAME_STATE.started:
      return (
        <PlayScreen
          bestScore={bestScore}
          updateBestScore={setBestScore}
          level={level}
          exitHandler={() => setGameState(GAME_STATE.notStarted)}
          winHandler={winHandler}
          loseHandler={() => setGameState(GAME_STATE.lost)}
        />
      );

    case GAME_STATE.win:
      return (
        <ResultScreen
          isWinner={true}
          bestScore={bestScore}
          exitHandler={() => setGameState(GAME_STATE.notStarted)}
        />
      );

    case GAME_STATE.lost:
      return (
        <ResultScreen
          isWinner={false}
          bestScore={bestScore}
          playHandler={() => setGameState(GAME_STATE.started)}
          exitHandler={() => setGameState(GAME_STATE.notStarted)}
        />
      );

    case GAME_STATE.levelUp:
      return <ResultScreen isWinner={true} isLevelUp={true} level={level} />;

    default:
      return (
        <EntryScreen
          level={level}
          updateLevel={updateLevel}
          startHandler={() => setGameState(GAME_STATE.started)}
        />
      );
  }
}
