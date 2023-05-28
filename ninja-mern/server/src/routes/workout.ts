import { Router } from "express";
import * as controller from "../controllers/workout";
const router = Router();

router.get("/", controller.getAllWorkouts);
router.post("/", controller.createWorkout);
router.get("/:id", controller.getWorkout);
router.patch("/:id", controller.updateWorkout);
router.delete("/:id", controller.deleteWorkout);

export default router;
