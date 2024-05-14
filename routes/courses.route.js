import express from "express";
import validationSchema from "../middlewares/validationSchema.js";

import {
	getCourses,
	getCourse,
	addCourse,
	updateCourse,
	deleteCourse,
} from "../controllers/courses.controller.js";

const router = express.Router();

router.use(express.json());

router.route("/").get(getCourses).post(validationSchema(), addCourse);

router.route("/:id").get(getCourse).patch(updateCourse).delete(deleteCourse);

export default router;
