package com.example.pe_sba301_sp25_be_de180291.service;

import com.example.pe_sba301_sp25_be_de180291.entity.AccountMember;
import com.example.pe_sba301_sp25_be_de180291.repository.AccountMemberRepository;
import com.example.pe_sba301_sp25_be_de180291.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AccountMemberRepository accountRepo;
    private final JwtUtil jwtUtil;

    public String login(String email, String password){

        AccountMember user = accountRepo
                .findByEmailAddress(email)
                .orElseThrow(() -> new RuntimeException("Invalid email"));

        if(!user.getMemberPassword().equals(password))
            throw new RuntimeException("Invalid password");

        return jwtUtil.generateToken(
                user.getEmailAddress(),
                user.getMemberRole()
        );
    }
}
