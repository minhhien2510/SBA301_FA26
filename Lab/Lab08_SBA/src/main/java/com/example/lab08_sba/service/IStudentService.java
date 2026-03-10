package com.example.lab08_sba.service;

import com.example.lab08_sba.pojo.Student;

import java.util.List;

public interface IStudentService {

    List<Student> findAll();

    Student save(Student student);

    void delete(String id);

}
