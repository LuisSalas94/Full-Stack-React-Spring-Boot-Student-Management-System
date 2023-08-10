import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createStudent,
  getStudentById,
  updateStudent,
} from "../services/StudentService";
import { useParams } from "react-router-dom";
import { listDepartments } from "../services/DepartmentService";
import { toast } from "react-toastify";
import ButtonLink from "./ButtonLink";

const StudentComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [departments, setDepartments] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDepartment = async () => {
    const response = await listDepartments();
    setDepartments(response.data);
  };

  useEffect(() => {
    fetchDepartment();
  }, []);

  const saveOrUpdateStudent = async (e) => {
    e.preventDefault();

    const student = { firstName, lastName, email, departmentId };

    if (firstName && lastName && email) {
      if (id) {
        await updateStudent(id, student);
        toast.info("Student updated successfully!");
        navigate("/");
        return;
      }
      await createStudent(student);
      toast.success("Student added successfully!");
      navigate("/");
      return;
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  const getStudent = async (id) => {
    const response = await getStudentById(id);
    const student = response.data;
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setEmail(student.email);
    setDepartmentId(student.departmentId);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Student");
      getStudent(id);
    } else {
      setTitle("Add Student");
    }
  }, [id]);

  return (
    <div className="container mt-5">
      <ButtonLink text="Go Back" toAction="/" />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h2 className="text-center">{title}</h2>
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name: </label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email: </label>
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Select Department: </label>
                <select
                  className="form-select"
                  value={departmentId}
                  onChange={(e) => setDepartmentId(e.target.value)}
                >
                  <option value="Select Department">Select Department</option>
                  {departments.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>
                        {item.departmentName}
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                className="btn btn-outline-success"
                onClick={saveOrUpdateStudent}
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

export default StudentComponent;
