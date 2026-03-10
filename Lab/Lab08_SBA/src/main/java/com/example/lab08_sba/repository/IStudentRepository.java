package com.example.lab08_sba.repository;

import com.example.lab08_sba.pojo.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IStudentRepository extends MongoRepository<Student, String> {

}
