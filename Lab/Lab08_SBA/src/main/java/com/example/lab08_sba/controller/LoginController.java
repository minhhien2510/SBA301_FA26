package com.example.lab08_sba.controller;

import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String loginPage() {
        return "login";
    }

    @GetMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "redirect:/login";
    }

    @PostMapping("/login")
    public String login(String email, String password, HttpSession session){

        if("admin@gmail.com".equals(email) && "123".equals(password)){
            session.setAttribute("user", email);
            return "redirect:/home";
        }

        return "login";
    }
}
