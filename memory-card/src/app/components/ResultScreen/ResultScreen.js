export function ResultScreen({ isWinner, playHandler, exitHandler }) {
  return (
    <div>
      <p>you {isWinner ? "Win" : "Lost"}</p>
      {playHandler ? <button onClick={playHandler}>Play Again</button> : null}
      <button onClick={exitHandler}>Exit</button>
    </div>
  );
}
