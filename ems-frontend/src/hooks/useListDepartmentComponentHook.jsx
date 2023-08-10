import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  listDepartments,
  deleteDepartment,
} from "../services/DepartmentService";
import { toast } from "react-toastify";

const useListDepartmentComponentHook = () => {
  const [departments, setDepartments] = useState([]);
  const navigate = useNavigate();

  const getDepartments = async () => {
    try {
      const response = await listDepartments();
      setDepartments(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateDepartment = (id) => {
    navigate(`/edit-department/${id}`);
  };

  const removeDepartment = async (id) => {
    await deleteDepartment(id);
    toast.error("Department deleted successfully!");
    getDepartments();
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return {
    departments,
    getDepartments,
    updateDepartment,
    removeDepartment,
  };
};

export default useListDepartmentComponentHook;
