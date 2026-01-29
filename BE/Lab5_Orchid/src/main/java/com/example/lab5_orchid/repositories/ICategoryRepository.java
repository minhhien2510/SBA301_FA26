package com.example.lab5_orchid.repositories;

import com.example.lab5_orchid.pojos.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category, Long> {
}

