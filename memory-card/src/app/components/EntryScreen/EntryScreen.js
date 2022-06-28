export function EntryScreen({ level, updateLevel, startHandler }) {
  return (
    <div>
      <h1>Welcome to Memory Card</h1>
      <label htmlFor="entry-level"> Choose Level</label>
      <input
        type="number"
        id="entry-level"
        value={level}
        onChange={(e) => updateLevel(+e.target.value)}
      />
      <button onClick={startHandler}>Start</button>
    </div>
  );
}
