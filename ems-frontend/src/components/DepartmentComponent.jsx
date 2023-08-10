import { useEffect, useState } from "react";
import {
  createDepartment,
  getDepartmentById,
  updateDeparment,
} from "../services/DepartmentService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonLink from "./ButtonLink";

const DepartmentComponent = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getDepartment = async (id) => {
    const response = await getDepartmentById(id);
    const department = response.data;
    setDepartmentName(department.departmentName);
    setDepartmentDescription(department.departmentDescription);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Department");
      getDepartment(id);
      return;
    } else {
      setTitle("Add Department");
    }
  }, [id]);

  const saveOrUpdateDepartment = (e) => {
    e.preventDefault();
    const department = { departmentName, departmentDescription };
    if (departmentName && departmentDescription) {
      if (id) {
        updateDeparment(id, department);
        toast.info("Department updated successfully!");
        navigate("/departments");
        return;
      }
      createDepartment(department);
      toast.success("Department added successfully!");
      navigate("/departments");
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/departments" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Department Name: </label>
                <input
                  type="text"
                  name="departmentName"
                  placeholder="Enter Department Name"
                  className="form-control"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Department Description: </label>
                <input
                  type="text"
                  name="departmentDescription"
                  placeholder="Enter Department Description"
                  className="form-control"
                  value={departmentDescription}
                  onChange={(e) => setDepartmentDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateDepartment}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentComponent;
