package com.example.assignment2_sba301.service;

import com.example.assignment2_sba301.model.SystemAccount;
import com.example.assignment2_sba301.repository.SystemAccountRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SystemAccountService {

    private final SystemAccountRepository accountRepository;

    public List<SystemAccount> getAll() {
        return accountRepository.findAll();
    }

    public SystemAccount getById(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Account not found with id " + id));
    }

    public List<SystemAccount> searchByName(String name) {
        return accountRepository.findByAccountNameContainingIgnoreCase(name);
    }

    public SystemAccount create(SystemAccount account) {
        account.setAccountId(null);
        return accountRepository.save(account);
    }

    public SystemAccount update(Long id, SystemAccount updated) {
        SystemAccount existing = getById(id);
        existing.setAccountName(updated.getAccountName());
        existing.setAccountEmail(updated.getAccountEmail());
        existing.setAccountRoleCode(updated.getAccountRoleCode());
        if (updated.getAccountPassword() != null && !updated.getAccountPassword().isBlank()) {
            existing.setAccountPassword(updated.getAccountPassword());
        }
        return accountRepository.save(existing);
    }

    @Transactional
    public void delete(Long id) {
        SystemAccount account = getById(id);
        if (!account.getCreatedArticles().isEmpty()) {
            throw new IllegalStateException("Cannot delete account that has created news articles");
        }
        accountRepository.delete(account);
    }

    public SystemAccount login(String email, String password) {
        return accountRepository.findByAccountEmail(email)
                .filter(acc -> acc.getAccountPassword().equals(password))
                .orElseThrow(() -> new EntityNotFoundException("Invalid email or password"));
    }
}

