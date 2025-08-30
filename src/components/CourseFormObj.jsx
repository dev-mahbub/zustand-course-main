import { useState } from "react";
import useCoursesStoreObj from "../app/courseStoreObject";

const CourseFormObj = () => {
  const { addCourse } = useCoursesStoreObj((state) => ({
    addCourse: state.addCourse,
  }));
  const [courseTitle, setCourseTitle] = useState("");
  const handleCourseSubmit = () => {
    if (!courseTitle) {
      console.log("CoursesForm Rendered");
      return;
    }
    addCourse({
      id: Math.ceil(Math.random() * 1000000),
      title: courseTitle,
      completed: false,
    });
    setCourseTitle("");
  };
  return (
    <div className="form-container">
      <input
        value={courseTitle}
        onChange={(e) => setCourseTitle(e.target.value)}
        className="form-input"
      />
      <button onClick={handleCourseSubmit} className="form-submit-btn">
        Add Course
      </button>
    </div>
  );
};

export default CourseFormObj;
