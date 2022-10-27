import { courses } from "../utils/courses.js";

export const getAllCourse = async (req, res, next) => {
  try {
    res.status(200).json(courses);
  } catch (error) {
    next(error);
  }
};

export const getCourseById = async (req, res, next) => {
  const courseId = req.params.id;
  try {
    const course = courses.find((course) => course.id.toString() === courseId);
    if (course) {
      return res.status(200).json(course);
    } else {
      return res.status(200).json({ message: "No Course Found" });
    }
  } catch (error) {
    next(error);
  }
};
