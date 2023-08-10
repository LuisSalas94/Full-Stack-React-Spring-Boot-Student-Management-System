package net.fernandosalas.ems.service.implementation;
import lombok.AllArgsConstructor;
import net.fernandosalas.ems.dto.StudentDto;
import net.fernandosalas.ems.entity.Student;
import net.fernandosalas.ems.exception.ResourceNotFoundException;
import net.fernandosalas.ems.mapper.StudentMapper;
import net.fernandosalas.ems.repository.StudentRepository;
import net.fernandosalas.ems.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class StudentServiceImplementation implements StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {
        Student student = StudentMapper.mapToStudent(studentDto);
        Student savedStudent =  studentRepository.save(student);
        return StudentMapper.mapToStudentDto(savedStudent);
    }

    @Override
    public StudentDto getStudentById(Long studentId) {
       Student student = studentRepository.findById(studentId).orElseThrow(()->
                new ResourceNotFoundException("Student was not found with given id: " + studentId));
        return StudentMapper.mapToStudentDto(student);
    }

    @Override
    public List<StudentDto> getAllStudents() {
       List<Student> studentList =  studentRepository.findAll();
        return studentList.stream()
                .map(StudentMapper::mapToStudentDto)
                .collect(Collectors.toList());
    }
}
