package net.fernandosalas.ems.service;

import net.fernandosalas.ems.dto.StudentDto;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto getStudentById(Long studentId);
}
