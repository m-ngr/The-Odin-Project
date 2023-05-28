import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { IWorkout, WorkoutsActionTypes } from "../reducers/workoutsReducer";

const WorkoutDetails = ({ workout }: { workout: IWorkout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleDelete = async () => {
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/api/workouts/" + workout._id,
      { method: "DELETE" }
    );

    const payload = await response.json();

    if (response.ok) {
      dispatch({ type: WorkoutsActionTypes.DELETE_WORKOUT, payload });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.name}</h4>
      <p>
        <strong>Load (kg): </strong>
        {workout.load}
      </p>
      <p>
        <strong>Number of reps: </strong>
        {workout.rounds}
      </p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
