// User registration - Only POST request where user can register into the website

import express from "express";
import {
  addtask,
  deleteTask,
  getAllTasks,
  getAllAdminTasks,
  getTaskById,
  updateTask,
} from "../Controller/tasksController.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

router.route("/").post(protect, addtask).get(protect, getAllTasks);

router.route("/adminTasks").get(protect, getAllAdminTasks);

router.route("/:id").get(getTaskById).delete(deleteTask).put(updateTask);

export default router;
