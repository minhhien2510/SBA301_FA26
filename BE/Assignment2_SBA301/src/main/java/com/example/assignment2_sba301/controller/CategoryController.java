package com.example.assignment2_sba301.controller;

import com.example.assignment2_sba301.model.Category;
import com.example.assignment2_sba301.service.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping
    public List<Category> getAll() {
        return categoryService.getAll();
    }

    @GetMapping("/active")
    public List<Category> getActive() {
        return categoryService.getActive();
    }

    @GetMapping("/{id}")
    public Category getById(@PathVariable Long id) {
        return categoryService.getById(id);
    }

    @GetMapping("/search")
    public List<Category> search(@RequestParam("name") String name) {
        return categoryService.searchByName(name);
    }

    @PostMapping
    public Category create(@Valid @RequestBody Category category) {
        return categoryService.create(category);
    }

    @PutMapping("/{id}")
    public Category update(@PathVariable Long id, @Valid @RequestBody Category category) {
        return categoryService.update(id, category);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        categoryService.delete(id);
    }
}

