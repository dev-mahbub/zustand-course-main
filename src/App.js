import "./App.css";
import CourseFormObj from "./components/CourseFormObj";

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
    </div>
  );
}

export default App;
