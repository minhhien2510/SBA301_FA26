package com.example.assignment2_sba301.service;

import com.example.assignment2_sba301.model.Tag;
import com.example.assignment2_sba301.repository.TagRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {

    private final TagRepository tagRepository;

    public List<Tag> getAll() {
        return tagRepository.findAll();
    }

    public Tag getById(Long id) {
        return tagRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Tag not found with id " + id));
    }

    public List<Tag> searchByName(String name) {
        return tagRepository.findByTagNameContainingIgnoreCase(name);
    }

    public Tag create(Tag tag) {
        tag.setTagId(null);
        return tagRepository.save(tag);
    }

    public Tag update(Long id, Tag updated) {
        Tag existing = getById(id);
        existing.setTagName(updated.getTagName());
        existing.setNote(updated.getNote());
        return tagRepository.save(existing);
    }

    public void delete(Long id) {
        Tag tag = getById(id);
        tagRepository.delete(tag);
    }
}

