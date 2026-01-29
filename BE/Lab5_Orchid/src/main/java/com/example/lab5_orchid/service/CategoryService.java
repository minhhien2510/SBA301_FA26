package com.example.lab5_orchid.service;

import com.example.lab5_orchid.pojos.Category;
import com.example.lab5_orchid.repositories.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService implements ICategoryService {

    @Autowired
    private ICategoryRepository repo;

    @Override
    public List<Category> getAll() {
        return repo.findAll();
    }
}

