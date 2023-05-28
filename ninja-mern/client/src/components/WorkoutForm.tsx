import { FormEvent, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { WorkoutsActionTypes } from "../reducers/workoutsReducer";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [name, setName] = useState("");
  const [load, setLoad] = useState("");
  const [rounds, setRounds] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const workout = { name, load, rounds };

    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/api/workouts",
      {
        method: "POST",
        body: JSON.stringify(workout),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const payload = await response.json();

    if (response.ok) {
      setEmptyFields([]);
      setError(null);
      setName("");
      setLoad("");
      setRounds("");
      dispatch({ type: WorkoutsActionTypes.CREATE_WORKOUT, payload });
    } else {
      setError(payload.error);
      setEmptyFields(payload.emptyFields ?? []);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label>Excersize Title:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
      />

      <label>Number of Reps:</label>
      <input
        type="number"
        onChange={(e) => setRounds(e.target.value)}
        value={rounds}
        className={emptyFields.includes("rounds") ? "error" : ""}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
