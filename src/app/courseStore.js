import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const courseStore = (set) => ({
  courses: [],
  addCourses: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  removeCourses: (coursesId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== coursesId),
    }));
  },
  toggleCourses: (coursesId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === coursesId
          ? { ...course, coursesId: !course.coursesId }
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
