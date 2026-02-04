package com.example.assignment2_sba301.controller;

import com.example.assignment2_sba301.model.NewsArticle;
import com.example.assignment2_sba301.model.SystemAccount;
import com.example.assignment2_sba301.service.NewsArticleService;
import com.example.assignment2_sba301.service.SystemAccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class NewsArticleController {

    private final NewsArticleService newsArticleService;
    private final SystemAccountService accountService;

    // Public: view active news
    @GetMapping("/public")
    public List<NewsArticle> getPublicNews() {
        return newsArticleService.getActive();
    }

    @GetMapping
    public List<NewsArticle> getAll() {
        return newsArticleService.getAll();
    }

    @GetMapping("/{id}")
    public NewsArticle getById(@PathVariable Long id) {
        return newsArticleService.getById(id);
    }

    @GetMapping("/search")
    public List<NewsArticle> search(@RequestParam(required = false) String keyword,
                                    @RequestParam(required = false) String tagName) {
        return newsArticleService.search(keyword, tagName);
    }

    // History for a staff
    @GetMapping("/byCreator/{accountId}")
    public List<NewsArticle> getByCreator(@PathVariable Long accountId) {
        SystemAccount creator = accountService.getById(accountId);
        return newsArticleService.getByCreator(creator);
    }

    @PostMapping
    public NewsArticle create(@Valid @RequestBody NewsArticle article) {
        return newsArticleService.create(article);
    }

    @PutMapping("/{id}")
    public NewsArticle update(@PathVariable Long id, @Valid @RequestBody NewsArticle article) {
        return newsArticleService.update(id, article);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        newsArticleService.delete(id);
    }
}

