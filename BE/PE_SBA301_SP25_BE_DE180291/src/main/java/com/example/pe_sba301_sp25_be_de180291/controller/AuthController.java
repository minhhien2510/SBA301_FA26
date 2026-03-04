package com.example.pe_sba301_sp25_be_de180291.controller;

import com.example.pe_sba301_sp25_be_de180291.dto.LoginRequest;
import com.example.pe_sba301_sp25_be_de180291.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request){

        try{
            String token = authService.login(
                    request.getEmail(),
                    request.getPassword()
            );
            return ResponseEntity.ok(token);

        }catch (RuntimeException ex){
            return ResponseEntity.status(401)
                    .body(ex.getMessage());
        }
    }
}