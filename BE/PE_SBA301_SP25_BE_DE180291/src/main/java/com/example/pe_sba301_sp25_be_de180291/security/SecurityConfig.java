package com.example.pe_sba301_sp25_be_de180291.security;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

@Configuration
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthFilter jwtFilter;
    private final CorsConfigurationSource corsConfigurationSource;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        http
                // Disable CSRF (REST API)
                .csrf(csrf -> csrf.disable())

                // Enable CORS
                .cors(cors -> cors.configurationSource(corsConfigurationSource))

                // Stateless
                .sessionManagement(sm ->
                        sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )

                .authorizeHttpRequests(auth -> auth

                        // Cho phép tất cả login endpoint
                        .requestMatchers("/api/login").permitAll()
                        .requestMatchers("/api/login/**").permitAll()

                        // Cho phép OPTIONS
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // Public GET cars
                        .requestMatchers(HttpMethod.GET, "/api/cars/**").permitAll()

                        // ADMIN only
                        .requestMatchers(HttpMethod.POST, "/api/cars").hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/api/cars/**").hasRole("ADMIN")

                        .anyRequest().permitAll()
                )
                // Add JWT filter
                .addFilterBefore(jwtFilter,
                        UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}