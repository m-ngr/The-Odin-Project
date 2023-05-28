import { Request, Response } from "express";
import Workout from "../models/workout";
import { Types } from "mongoose";

export async function createWorkout(req: Request, res: Response) {
  // should validate and sanatize the input first
  const { name, load, rounds } = req.body;

  let emptyFields: string[] = [];

  if (!name) emptyFields.push("name");
  if (!load) emptyFields.push("load");
  if (!rounds) emptyFields.push("rounds");

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const workout = await Workout.create(req.body);
    res.json(workout);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function getAllWorkouts(req: Request, res: Response) {
  const workouts = await Workout.find().exec();
  res.json(workouts);
}

export async function getWorkout(req: Request, res: Response) {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout" });
  }

  const workout = await Workout.findById(id).exec();

  if (workout) return res.json({ workout });

  return res.status(404).json({ error: "No such workout" });
}

export async function updateWorkout(req: Request, res: Response) {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  try {
    const workout = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (workout) return res.json(workout);
    return res.status(400).json({ error: "No such workout" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function deleteWorkout(req: Request, res: Response) {
  const id = req.params.id;

  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such workout" });
  }

  try {
    const workout = await Workout.findByIdAndDelete(id);
    if (workout) return res.json(workout);
    return res.status(400).json({ error: "No such workout" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}
