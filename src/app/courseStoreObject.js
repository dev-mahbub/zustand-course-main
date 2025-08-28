import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStoreObject = (set) => ({
  courses: {},

  addCourse: (course) => {
    set((state) => ({
      courses: { ...state.courses, [course.id]: course },
    }));
  },

  removeCourse: (courseId) => {
    set((state) => {
      const newCourses = { ...state.course };
      delete newCourses[courseId];
      return { courses: newCourses };
    });
  },

  toggleCourseState: (courseId) => {
    set((state) => ({
      ...state.courses,
      ...state.courses[courseId],
      completed: !state.courses[courseId].completed,
    }));
  },
});

const useCoursesStoreObj = create(
  devtools(
    persist(courseStoreObject, {
      name: "courseObj",
    })
  )
);

export default useCoursesStoreObj;
