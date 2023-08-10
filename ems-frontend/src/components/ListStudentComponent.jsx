import { useState } from "react";
import { deleteStudent, listStudents } from "../services/StudentService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listDepartments } from "../services/DepartmentService";

const ListStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const [departments, setDepartments] = useState([]);

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

  const fetchDepartments = async () => {
    const response = await listDepartments();
    const departments = response.data;
    setDepartments(departments);
  };

  useEffect(() => {
    fetchStudents();
    fetchDepartments();
  }, []);

  const getDepartmentName = (departmentId) => {
    const department = departments.find((dept) => dept.id === departmentId);
    return department ? department.departmentName : "Unknown Department";
  };

  const addStudent = () => {
    navigate("/add-student");
  };

  const updateStudent = (id) => {
    navigate(`/edit-student/${id}`);
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
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email</th>
            <th scope="col">Department</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{getDepartmentName(item.departmentId)}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteStudentById(item.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-info"
                    onClick={() => updateStudent(item.id)}
                  >
                    Update
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
