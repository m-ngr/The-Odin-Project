export enum WorkoutsActionTypes {
  SET_WORKOUTS,
  CREATE_WORKOUT,
  DELETE_WORKOUT,
}

export interface IWorkout {
  name: string;
  load: number;
  rounds: number;
  _id?: string;
}

export interface IWorkoutsActions {
  type: WorkoutsActionTypes;
  payload: any;
}

export function workoutsReducer(state: IWorkout[], action: IWorkoutsActions) {
  switch (action.type) {
    case WorkoutsActionTypes.SET_WORKOUTS:
      return action.payload;
    case WorkoutsActionTypes.CREATE_WORKOUT:
      return [...state, action.payload];
    case WorkoutsActionTypes.DELETE_WORKOUT:
      return state.filter((item) => item._id !== action.payload._id);
    default:
      return state;
  }
}
