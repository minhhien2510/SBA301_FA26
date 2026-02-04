package com.example.assignment2_sba301.service;

import com.example.assignment2_sba301.model.Category;
import com.example.assignment2_sba301.repository.CategoryRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {

    private final CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    public List<Category> getActive() {
        return categoryRepository.findByIsActiveTrue();
    }

    public Category getById(Long id) {
        return categoryRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Category not found with id " + id));
    }

    public List<Category> searchByName(String name) {
        return categoryRepository.findByCategoryNameContainingIgnoreCase(name);
    }

    public Category create(Category category) {
        category.setCategoryId(null);
        return categoryRepository.save(category);
    }

    public Category update(Long id, Category updated) {
        Category existing = getById(id);
        existing.setCategoryName(updated.getCategoryName());
        existing.setCategoryDescription(updated.getCategoryDescription());
        existing.setParentCategory(updated.getParentCategory());
        existing.setIsActive(updated.getIsActive());
        return categoryRepository.save(existing);
    }

    @Transactional
    public void delete(Long id) {
        Category category = getById(id);
        if (!category.getArticles().isEmpty()) {
            throw new IllegalStateException("Cannot delete category that is used by news articles");
        }
        categoryRepository.delete(category);
    }
}

