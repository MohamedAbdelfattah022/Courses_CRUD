import { body } from "express-validator";

const validationSchema = () => {
	return [body("title").notEmpty().isLength({ min: 2 })];
};

export default validationSchema;
