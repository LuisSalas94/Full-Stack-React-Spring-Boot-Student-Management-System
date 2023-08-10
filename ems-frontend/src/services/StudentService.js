import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/students";

export const listStudents = () => {
  return axios.get(REST_API_URL);
};

export const createStudent = (student) => {
  return axios.post(REST_API_URL, student);
};

export const deleteStudent = (id) => {
  return axios.delete(`${REST_API_URL}/${id}`);
};
