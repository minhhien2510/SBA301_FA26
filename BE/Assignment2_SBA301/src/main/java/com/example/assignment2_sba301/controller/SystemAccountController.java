package com.example.assignment2_sba301.controller;

import com.example.assignment2_sba301.model.SystemAccount;
import com.example.assignment2_sba301.service.SystemAccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class SystemAccountController {

    private final SystemAccountService accountService;

    @GetMapping
    public List<SystemAccount> getAll() {
        return accountService.getAll();
    }

    @GetMapping("/{id}")
    public SystemAccount getById(@PathVariable Long id) {
        return accountService.getById(id);
    }

    @GetMapping("/search")
    public List<SystemAccount> search(@RequestParam("name") String name) {
        return accountService.searchByName(name);
    }

    @PostMapping
    public SystemAccount create(@Valid @RequestBody SystemAccount account) {
        return accountService.create(account);
    }

    @PutMapping("/{id}")
    public SystemAccount update(@PathVariable Long id, @Valid @RequestBody SystemAccount account) {
        return accountService.update(id, account);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        accountService.delete(id);
    }
}

