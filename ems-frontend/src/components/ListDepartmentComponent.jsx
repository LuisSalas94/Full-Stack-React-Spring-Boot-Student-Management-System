import { useEffect, useState } from "react";
import { listDepartments } from "../services/DepartmentService";
import { Link } from "react-router-dom";

const ListDepartmentComponent = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    const response = await listDepartments();
    setDepartments(response.data);
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
          </tr>
        </thead>
        <tbody>
          {departments.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.departmentName}</td>
                <td>{item.departmentDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDepartmentComponent;
