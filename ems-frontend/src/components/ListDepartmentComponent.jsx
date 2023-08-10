import { useEffect, useState } from "react";
import {
  deleteDepartment,
  listDepartments,
} from "../services/DepartmentService";
import { Link, useNavigate } from "react-router-dom";

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const getDepartments = async () => {
    const response = await listDepartments();
    setDepartments(response.data);
  };

  const updateDepartment = (id) => {
    navigate(`/edit-department/${id}`);
  };

  const removeDepartment = async (id) => {
    await deleteDepartment(id);
    getDepartments();
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center py-3">List of Departments</h2>
      <Link className="btn btn-outline-primary mb-2" to="/add-department">
        Add Department
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Department ID</th>
            <th scope="col">Department Name</th>
            <th scope="col">Department Description</th>
            <th scope="col">Action #1</th>
            <th scope="col">Action #2</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.departmentName}</td>
                <td>{item.departmentDescription}</td>
                <td>
                  <button
                    className="btn btn-outline-info me-2"
                    onClick={() => updateDepartment(item.id)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeDepartment(item.id)}
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

export default ListDepartmentComponent;
