package com.example.assignment2_sba301.repository;

import com.example.assignment2_sba301.model.NewsArticle;
import com.example.assignment2_sba301.model.SystemAccount;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NewsArticleRepository extends JpaRepository<NewsArticle, Long> {

    List<NewsArticle> findByNewsStatusTrue();

    List<NewsArticle> findByCreatedBy(SystemAccount createdBy);

    @Query("SELECT DISTINCT n FROM NewsArticle n LEFT JOIN n.tags t " +
            "WHERE (:keyword IS NULL OR LOWER(n.newsTitle) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "   OR LOWER(n.headline) LIKE LOWER(CONCAT('%', :keyword, '%'))) " +
            "AND (:tagName IS NULL OR LOWER(t.tagName) LIKE LOWER(CONCAT('%', :tagName, '%')))")
    List<NewsArticle> search(@Param("keyword") String keyword,
                             @Param("tagName") String tagName);
}

