import { courses } from "../utils/courses.js";
import { handleError } from "../utils/handleError.js";

export const getAllCourse = async (req, res, next) => {
  try {
    if (courses.length < 0) {
      return res.status(200).json(courses);
    }

    throw handleError("No Course Found", 400);
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
      throw handleError("No Course Found with is id", 404);
    }
  } catch (error) {
    next(error);
  }
};
