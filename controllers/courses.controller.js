import Course from "../models/course.model.js";
import { body, validationResult } from "express-validator";

const getCourses = async (req, res) => {
	const courses = await Course.find();
	res.json(courses);
};

const getCourse = async (req, res) => {
	try {
		let course = await Course.findById(req.params.id);
		if (!course) return res.status(404).json({ msg: "Course Not Found :)" });
		return res.json(course);
	} catch (err) {
		return res.status(404).json({ msg: "Invalid Course ID" });
	}
};

const addCourse = async (req, res) => {
	let result = validationResult(req);
	if (!result.isEmpty()) {
		return res.status(400).json(result.array());
	}

	let newCourse = new Course(req.body);

	await newCourse.save();
	res.status(201).json(newCourse);
};

const updateCourse = async (req, res) => {
	const id = req.params.id;
	try {
		const updatedCourse = await Course.updateOne(
			{ _id: id },
			{
				$set: { ...req.body },
			}
		);
		return res.status(200).json(updatedCourse);
	} catch (err) {
		return res.status(400).json({ error: err });
	}
};

const deleteCourse = async (req, res) => {
	let id = req.params.id;
	const deleted = await Course.deleteOne({ _id: id });
	return res.status(200).json({ succsess: true, msg: deleted });
};

export { getCourses, getCourse, addCourse, updateCourse, deleteCourse };
