package com.example.assignment2_sba301.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Category")
@Getter
@Setter
@NoArgsConstructor
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CategoryID")
    private Long categoryId;

    @NotBlank
    @Size(max = 100)
    @Column(name = "CategoryName", nullable = false, length = 100)
    private String categoryName;

    @Size(max = 500)
    @Column(name = "CategoryDescription", length = 500)
    private String categoryDescription;

    @ManyToOne
    @JoinColumn(name = "ParentCategoryID")
    @JsonIgnore
    private Category parentCategory;

    @NotNull
    @Column(name = "IsActive", nullable = false)
    private Boolean isActive = Boolean.TRUE;

    @OneToMany(mappedBy = "parentCategory")
    @JsonIgnore
    private List<Category> children = new ArrayList<>();

    @OneToMany(mappedBy = "category")
    @JsonIgnore
    private List<NewsArticle> articles = new ArrayList<>();
}

