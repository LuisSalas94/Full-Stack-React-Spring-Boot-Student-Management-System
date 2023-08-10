import { useState } from "react";
import { deleteStudent, listStudents } from "../services/StudentService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  const fetchStudents = async () => {
    try {
      const response = await listStudents();
      setStudents(response.data);
    } catch (err) {
      console.log(err);
    }
    return true;
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const addStudent = () => {
    navigate("/add-student");
  };

  const deleteStudentById = async (id) => {
    await deleteStudent(id);
    fetchStudents();
  };

  return (
    <div className="container">
      <h2 className="text-center my-3">List of Students</h2>
      <button className="btn btn-outline-primary mb-2" onClick={addStudent}>
        Add Employee
      </button>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email</th>
            <th scope="col">Action #1</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudentById(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListStudentComponent;
