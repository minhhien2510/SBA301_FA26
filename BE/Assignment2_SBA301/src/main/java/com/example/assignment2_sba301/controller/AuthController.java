package com.example.assignment2_sba301.controller;

import com.example.assignment2_sba301.dto.LoginRequest;
import com.example.assignment2_sba301.model.SystemAccount;
import com.example.assignment2_sba301.service.SystemAccountService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class AuthController {

    private final SystemAccountService accountService;

    @PostMapping("/login")
    public SystemAccount login(@Valid @RequestBody LoginRequest request) {
        return accountService.login(request.getEmail(), request.getPassword());
    }
}

