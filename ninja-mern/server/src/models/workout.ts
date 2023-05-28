import { Schema, model } from "mongoose";

interface IWorkout {
  name: string;
  load: number;
  rounds: number;
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  load: { type: Number, required: true },
  rounds: { type: Number, required: true },
});

export default model<IWorkout>("workout", workoutSchema);
