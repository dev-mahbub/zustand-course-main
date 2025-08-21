import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourses: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourse: (coursesId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== coursesId),
    }));
  },
  toggleCourseStatus: (coursesId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === coursesId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

//zustand create

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export default useCourseStore;
