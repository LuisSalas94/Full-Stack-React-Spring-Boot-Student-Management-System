package net.fernandosalas.ems.service;
import net.fernandosalas.ems.dto.StudentDto;
import java.util.List;

public interface StudentService {
    StudentDto createStudent(StudentDto studentDto);
    StudentDto getStudentById(Long studentId);
    List<StudentDto> getAllStudents();
    StudentDto updateStudent(Long studentId, StudentDto studentDto);
}
