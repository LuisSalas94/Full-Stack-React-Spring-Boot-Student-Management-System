import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listDepartments } from "../services/DepartmentService";
import {
  updateStudent,
  createStudent,
  getStudentById,
} from "../services/StudentService";

const useStudentComponentHook = () => {
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
      try {
        if (id) {
          await updateStudent(id, student);
          toast.info("Student updated successfully!");
          navigate("/");
        } else {
          await createStudent(student);
          toast.success("Student added successfully!");
          navigate("/");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error("Error saving/updating student:", error);
      }
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  const getStudentData = async (studentId) => {
    const response = await getStudentById(studentId);
    const student = response.data;
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setEmail(student.email);
    setDepartmentId(student.departmentId);
  };

  useEffect(() => {
    if (id) {
      setTitle("Update Student");
      getStudentData(id);
    } else {
      setTitle("Add Student");
    }
  }, [id]);

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    departmentId,
    setDepartmentId,
    departments,
    saveOrUpdateStudent,
    title,
  };
};

export default useStudentComponentHook;
