import entryImg from "../../../images/entry.jpg";

export function EntryScreen({ level, updateLevel, startHandler }) {
  return (
    <section className="flex-col">
      <h2>Welcome to Memory Card</h2>
      <img src={entryImg} alt="wallpaper" height="300px" />
      <div className="input-wrapper">
        <label htmlFor="entry-level"> Choose Level</label>
        <input
          type="number"
          id="entry-level"
          value={level}
          onChange={(e) => updateLevel(+e.target.value)}
        />
      </div>

      <button onClick={startHandler} className="btn">
        Start
      </button>
    </section>
  );
}
