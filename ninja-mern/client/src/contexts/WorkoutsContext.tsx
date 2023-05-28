import { Dispatch, createContext, useReducer } from "react";
import {
  IWorkout,
  IWorkoutsActions,
  workoutsReducer,
} from "../reducers/workoutsReducer";

export interface IWorkoutsContext {
  workouts: IWorkout[];
  dispatch: Dispatch<IWorkoutsActions>;
}

export const WorkoutsContext = createContext<IWorkoutsContext | undefined>(
  undefined
);

const WorkoutsContextProvider = (props: any) => {
  const [workouts, dispatch] = useReducer(workoutsReducer, []);

  return (
    <WorkoutsContext.Provider value={{ workouts, dispatch }}>
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContextProvider;
