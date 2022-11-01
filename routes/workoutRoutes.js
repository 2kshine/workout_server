const express = require("express");
const workoutController = require("../controllers/workoutController");
const router = express.Router();

router
  .route("/")
  .get(workoutController.getAllWorkouts)
  .post(workoutController.createWorkout);

router
  .route("/:id")
  .get(workoutController.getSingleWorkout)
  .patch(workoutController.updateWorkout)
  .delete(workoutController.deleteWorkout);

  module.exports = router;