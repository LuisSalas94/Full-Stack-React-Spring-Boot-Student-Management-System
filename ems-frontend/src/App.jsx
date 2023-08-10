import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import ListStudentComponent from "./components/ListStudentComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentComponent from "./components/StudentComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListStudentComponent />} />
          <Route path="/students" element={<ListStudentComponent />} />
          <Route path="/add-student" element={<StudentComponent />} />
          <Route path="/edit-student/:id" element={<StudentComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
