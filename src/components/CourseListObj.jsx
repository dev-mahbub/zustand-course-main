/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import useCoursesStore from "../app/courseStoreObject";

const CourseListObj = () => {
  const { courses, removeCourse, toggleCoursesState } = useCoursesStore();
  return (
    <>
      <ul>
        {Object.values(courses).map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroudColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    onChange={(e) => {
                      toggleCoursesState(course.id);
                    }}
                    type="checkbox"
                  />
                </span>
                <span>{course?.title}</span>
                <button
                  onClick={removeCourse(course.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseListObj;
