import express from "express";
import router from "./routes/courses.route.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const url = process.env.DB_URL;

mongoose.connect(url).then(() => {
	console.log("mongodb connected");
});

app.use("/api/courses", router);

app.listen(5000, () => {
	console.log("listening on port 5000");
});
