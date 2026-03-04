package com.example.pe_sba301_sp25_be_de180291.security;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response);
            return;
        }

        try {

            String token = authHeader.substring(7);

            String email = jwtUtil.extractEmail(token);
            Integer role = jwtUtil.extractRole(token);

            if(role == null){
                filterChain.doFilter(request,response);
                return;
            }

            String roleName = switch(role){
                case 1 -> "ROLE_ADMIN";
                case 2 -> "ROLE_STAFF";
                default -> "ROLE_MEMBER";
            };

            UsernamePasswordAuthenticationToken auth =
                    new UsernamePasswordAuthenticationToken(
                            email,
                            null,
                            List.of(new SimpleGrantedAuthority(roleName))
                    );

            SecurityContextHolder.getContext().setAuthentication(auth);

        } catch (Exception e){
            e.printStackTrace();
            // Không crash
        }

        filterChain.doFilter(request,response);
    }
}
