package com.example.assignment2_sba301.service;

import com.example.assignment2_sba301.model.NewsArticle;
import com.example.assignment2_sba301.model.SystemAccount;
import com.example.assignment2_sba301.repository.NewsArticleRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsArticleService {

    private final NewsArticleRepository newsArticleRepository;

    public List<NewsArticle> getAll() {
        return newsArticleRepository.findAll();
    }

    public List<NewsArticle> getActive() {
        return newsArticleRepository.findByNewsStatusTrue();
    }

    public NewsArticle getById(Long id) {
        return newsArticleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("News article not found with id " + id));
    }

    public List<NewsArticle> getByCreator(SystemAccount creator) {
        return newsArticleRepository.findByCreatedBy(creator);
    }

    public List<NewsArticle> search(String keyword, String tagName) {
        return newsArticleRepository.search(
                (keyword == null || keyword.isBlank()) ? null : keyword,
                (tagName == null || tagName.isBlank()) ? null : tagName
        );
    }

    public NewsArticle create(NewsArticle article) {
        article.setNewsArticleId(null);
        article.setCreatedDate(LocalDateTime.now());
        return newsArticleRepository.save(article);
    }

    public NewsArticle update(Long id, NewsArticle updated) {
        NewsArticle existing = getById(id);
        existing.setNewsTitle(updated.getNewsTitle());
        existing.setHeadline(updated.getHeadline());
        existing.setNewsContent(updated.getNewsContent());
        existing.setNewsSource(updated.getNewsSource());
        existing.setNewsStatus(updated.getNewsStatus());
        existing.setCategory(updated.getCategory());
        existing.setUpdatedBy(updated.getUpdatedBy());
        existing.setModifiedDate(LocalDateTime.now());
        existing.setTags(updated.getTags());
        return newsArticleRepository.save(existing);
    }

    public void delete(Long id) {
        NewsArticle article = getById(id);
        newsArticleRepository.delete(article);
    }
}

