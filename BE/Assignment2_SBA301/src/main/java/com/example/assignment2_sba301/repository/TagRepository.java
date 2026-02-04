package com.example.assignment2_sba301.repository;

import com.example.assignment2_sba301.model.Tag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TagRepository extends JpaRepository<Tag, Long> {

    List<Tag> findByTagNameContainingIgnoreCase(String tagName);
}

