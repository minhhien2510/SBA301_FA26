package com.example.lab08_sba.service;

import com.example.lab08_sba.pojo.Student;
import com.example.lab08_sba.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService implements IStudentService {

    @Autowired
    private IStudentRepository repo;

    @Override
    public List<Student> findAll() {
        return repo.findAll();
    }

    @Override
    public Student save(Student student) {
        return repo.save(student);
    }

    @Override
    public void delete(String id) {
        repo.deleteById(id);
    }
}
