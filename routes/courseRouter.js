import express from "express";
import {
  getAllCourse,
  getCourseById,
} from "../controllers/coursesControllers.js";
const router = express.Router();

router.route("/").get(getAllCourse);
router.route("/:id").get(getCourseById);

export default router;
