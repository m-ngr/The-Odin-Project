export function ResultScreen({
  isWinner,
  isLevelUp,
  level,
  bestScore,
  playHandler,
  exitHandler,
}) {
  return (
    <section className="flex-col">
      <h2 className="round">You {isWinner ? "Win" : "Lost"}</h2>
      {bestScore && <p> Your best score is {bestScore}</p>}
      {isLevelUp && <p> Up to level {level}</p>}
      {playHandler && (
        <button className="btn" onClick={playHandler}>
          Play Again
        </button>
      )}
      {exitHandler && (
        <button className="btn" onClick={exitHandler}>
          Exit
        </button>
      )}
    </section>
  );
}
