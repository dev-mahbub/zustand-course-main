import "./App.css";
import CourseFormObj from "./components/CourseFormObj";
import CourseListObj from "./components/CourseListObj";

function App() {
  return (
    <div className="main-container">
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
        }}
      >
        {" "}
        My Course list
      </h1>
      <CourseFormObj />
      <CourseListObj />
    </div>
  );
}

export default App;
