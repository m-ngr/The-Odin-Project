import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import { loadCards } from "./utils/cardList";
import { randomize } from "./utils/randomize";

let cards = loadCards();

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [usedIDs, setUsedIDs] = useState([]);
  cards = randomize(cards);

  function resetGame() {
    setScore(0);
    setUsedIDs([]);
  }

  function handleCard(card) {
    if (usedIDs.includes(card.id)) {
      console.log("You Lose");
      resetGame();
    } else {
      setUsedIDs(usedIDs.concat(card.id));
      setScore(score + 1);
      if (score === bestScore) setBestScore(score + 1);
    }
  }

  useEffect(() => {
    if (usedIDs.length === cards.length) {
      console.log("You win");
      resetGame();
    }
  }, [usedIDs]);

  return (
    <div>
      <p>Welcome to Memory Cards</p>
      <p>Current Score: {score}</p>
      <p>Best Score: {bestScore}</p>
      <div>
        {cards.map((c) => (
          <Card key={c.id} card={c} onClick={handleCard} />
        ))}
      </div>
    </div>
  );
}
