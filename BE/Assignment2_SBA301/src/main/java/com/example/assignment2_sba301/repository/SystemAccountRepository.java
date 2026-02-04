package com.example.assignment2_sba301.repository;

import com.example.assignment2_sba301.model.SystemAccount;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SystemAccountRepository extends JpaRepository<SystemAccount, Long> {

    Optional<SystemAccount> findByAccountEmail(String accountEmail);

    List<SystemAccount> findByAccountNameContainingIgnoreCase(String accountName);
}

