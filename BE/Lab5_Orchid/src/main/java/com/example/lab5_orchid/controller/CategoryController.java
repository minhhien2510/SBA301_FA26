package com.example.lab5_orchid.controller;

import com.example.lab5_orchid.pojos.Category;
import com.example.lab5_orchid.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/categories")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private ICategoryService service;

    @GetMapping
    public List<Category> getAll(){
        return service.getAll();
    }
}

