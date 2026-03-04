package com.example.pe_sba301_sp25_be_de180291.repository;

import com.example.pe_sba301_sp25_be_de180291.entity.AccountMember;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AccountMemberRepository
        extends JpaRepository<AccountMember,String> {

    Optional<AccountMember> findByEmailAddress(String emailAddress);
}
