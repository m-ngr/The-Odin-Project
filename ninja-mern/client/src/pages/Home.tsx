import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { WorkoutsActionTypes } from "../reducers/workoutsReducer";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  useEffect(() => {
    fetch(process.env.REACT_APP_SERVER_URL + "/api/workouts")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((payload) =>
        dispatch({ type: WorkoutsActionTypes.SET_WORKOUTS, payload })
      );
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
