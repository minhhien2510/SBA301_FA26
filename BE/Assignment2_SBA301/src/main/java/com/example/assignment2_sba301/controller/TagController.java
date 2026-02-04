package com.example.assignment2_sba301.controller;

import com.example.assignment2_sba301.model.Tag;
import com.example.assignment2_sba301.service.TagService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tags")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class TagController {

    private final TagService tagService;

    @GetMapping
    public List<Tag> getAll() {
        return tagService.getAll();
    }

    @GetMapping("/{id}")
    public Tag getById(@PathVariable Long id) {
        return tagService.getById(id);
    }

    @GetMapping("/search")
    public List<Tag> search(@RequestParam("name") String name) {
        return tagService.searchByName(name);
    }

    @PostMapping
    public Tag create(@Valid @RequestBody Tag tag) {
        return tagService.create(tag);
    }

    @PutMapping("/{id}")
    public Tag update(@PathVariable Long id, @Valid @RequestBody Tag tag) {
        return tagService.update(id, tag);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tagService.delete(id);
    }
}

