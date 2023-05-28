require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import workoutRoute from "./routes/workout";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/workouts", workoutRoute);

mongoose
  .connect(process.env.MONGO_URI ?? "")
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port", port);
    });
  })
  .catch((error: Error) => console.error(error));
