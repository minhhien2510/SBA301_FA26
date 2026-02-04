package com.example.assignment2_sba301.repository;

import com.example.assignment2_sba301.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    List<Category> findByCategoryNameContainingIgnoreCase(String categoryName);

    List<Category> findByIsActiveTrue();
}

