package com.example.pe_sba301_sp25_be_de180291.dto;


import lombok.Data;

@Data
public class LoginRequest {
    private String email;
    private String password;
}
