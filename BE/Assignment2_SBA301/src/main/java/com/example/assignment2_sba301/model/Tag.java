package com.example.assignment2_sba301.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Tag")
@Getter
@Setter
@NoArgsConstructor
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "TagID")
    private Long tagId;

    @NotBlank
    @Size(max = 100)
    @Column(name = "TagName", nullable = false, length = 100)
    private String tagName;

    @Size(max = 255)
    @Column(name = "Note", length = 255)
    private String note;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnore
    private List<NewsArticle> articles = new ArrayList<>();
}

