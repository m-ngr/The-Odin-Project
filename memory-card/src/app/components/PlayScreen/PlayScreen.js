import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { loadCards } from "../../utils/cardList";
import { randomize } from "../../utils/randomize";
import "./PlayScreen.css";

export function PlayScreen({
  bestScore,
  level,
  updateBestScore,
  exitHandler,
  winHandler,
  loseHandler,
}) {
  const [fade, setFade] = useState(false);
  const [usedIDs, setUsedIDs] = useState([]);
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(
    randomize(loadCards()).slice(0, 4 * level)
  );

  function resetGame() {
    setScore(0);
    setUsedIDs([]);
  }

  useEffect(() => {
    if (score > bestScore) updateBestScore(score);
  }, [score, bestScore, updateBestScore]);

  function handleCard(card) {
    if (usedIDs.includes(card.id)) {
      resetGame();
      loseHandler();
    } else {
      setFade(true);
      setTimeout(() => {
        setUsedIDs(usedIDs.concat(card.id));
        setScore(score + 1);
        setCards(randomize(cards));
        setFade(false);
      }, 400);
    }
  }

  useEffect(() => {
    if (usedIDs.length === cards.length) {
      resetGame();
      winHandler();
    }
  }, [usedIDs, cards, winHandler]);

  return (
    <section className="flex-col">
      <h2>Memory Cards Level {level}</h2>
      <div className="flex-row">
        <span className="round">Current Score: {score}</span>
        <span className="round">Best Score: {bestScore}</span>
      </div>

      <div className={`play-grid ${fade ? "fade" : ""}`}>
        {cards.map((c) => (
          <Card key={c.id} card={c} onClick={handleCard} />
        ))}
      </div>

      <button onClick={exitHandler} className="btn">
        Exit
      </button>
    </section>
  );
}
