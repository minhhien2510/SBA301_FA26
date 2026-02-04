package com.example.assignment2_sba301.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "NewsArticle")
@Getter
@Setter
@NoArgsConstructor
public class NewsArticle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NewsArticleID")
    private Long newsArticleId;

    @NotBlank
    @Size(max = 200)
    @Column(name = "NewsTitle", nullable = false, length = 200)
    private String newsTitle;

    @Size(max = 255)
    @Column(name = "Headline", length = 255)
    private String headline;

    @NotNull
    @Column(name = "CreatedDate", nullable = false)
    private LocalDateTime createdDate = LocalDateTime.now();

    @Column(name = "ModifiedDate")
    private LocalDateTime modifiedDate;

    @Lob
    @NotBlank
    @Column(name = "NewsContent", nullable = false)
    private String newsContent;

    @Size(max = 150)
    @Column(name = "NewsSource", length = 150)
    private String newsSource;

    @NotNull
    @Column(name = "NewsStatus", nullable = false)
    private Boolean newsStatus = Boolean.TRUE; // true = active, false = inactive

    @ManyToOne
    @JoinColumn(name = "CategoryID", nullable = false)
    @JsonIgnoreProperties({"parentCategory", "children", "articles"})
    private Category category;

    @ManyToOne
    @JoinColumn(name = "CreatedByID", nullable = false)
    @JsonIgnoreProperties({"createdArticles", "updatedArticles", "accountPassword"})
    private SystemAccount createdBy;

    @ManyToOne
    @JoinColumn(name = "UpdatedByID")
    @JsonIgnoreProperties({"createdArticles", "updatedArticles", "accountPassword"})
    private SystemAccount updatedBy;

    @ManyToMany
    @JoinTable(
            name = "NewsTag",
            joinColumns = @JoinColumn(name = "NewsArticleID"),
            inverseJoinColumns = @JoinColumn(name = "TagID")
    )
    @JsonIgnoreProperties({"articles"})
    private List<Tag> tags = new ArrayList<>();
}

