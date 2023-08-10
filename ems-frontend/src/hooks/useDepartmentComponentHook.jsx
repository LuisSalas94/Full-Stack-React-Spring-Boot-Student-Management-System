import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  getDepartmentById,
  createDepartment,
  updateDeparment,
} from "../services/DepartmentService";

const useDepartmentComponentHook = () => {
  const [departmentName, setDepartmentName] = useState("");
  const [departmentDescription, setDepartmentDescription] = useState("");
  const [title, setTitle] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

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
    } else {
      setTitle("Add Department");
    }
  }, [id]);

  const saveOrUpdateDepartment = async (e) => {
    e.preventDefault();
    const department = { departmentName, departmentDescription };
    if (departmentName && departmentDescription) {
      if (id) {
        await updateDeparment(id, department);
        toast.info("Department updated successfully!");
        navigate("/departments");
        return;
      }
      await createDepartment(department);
      toast.success("Department added successfully!");
      navigate("/departments");
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return {
    departmentName,
    setDepartmentName,
    departmentDescription,
    setDepartmentDescription,
    title,
    saveOrUpdateDepartment,
  };
};

export default useDepartmentComponentHook;
