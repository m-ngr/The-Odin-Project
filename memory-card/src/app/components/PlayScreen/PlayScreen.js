import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import { loadCards } from "../../utils/cardList";
import { randomize } from "../../utils/randomize";

export function PlayScreen({
  bestScore,
  level,
  updateScore,
  exitHandler,
  winHandler,
  loseHandler,
}) {
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
    if (score > bestScore) updateScore(score);
  }, [score, bestScore, updateScore]);

  function handleCard(card) {
    if (usedIDs.includes(card.id)) {
      resetGame();
      loseHandler();
    } else {
      setUsedIDs(usedIDs.concat(card.id));
      setScore(score + 1);
      setCards(randomize(cards));
    }
  }

  useEffect(() => {
    if (usedIDs.length === cards.length) {
      resetGame();
      winHandler();
    }
  }, [usedIDs]);

  return (
    <div>
      <h1>Welcome to Memory Cards</h1>
      <p>Current Level: {level}</p>
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <div>
        {cards.map((c) => (
          <Card key={c.id} card={c} onClick={handleCard} />
        ))}
      </div>
      <button onClick={exitHandler}>Exit</button>
    </div>
  );
}
