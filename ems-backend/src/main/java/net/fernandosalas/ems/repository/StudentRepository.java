package net.fernandosalas.ems.repository;
import net.fernandosalas.ems.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
