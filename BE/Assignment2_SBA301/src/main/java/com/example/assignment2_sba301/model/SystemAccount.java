package com.example.assignment2_sba301.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "SystemAccount")
@Getter
@Setter
@NoArgsConstructor
public class SystemAccount {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "AccountID")
    private Long accountId;

    @NotBlank
    @Size(max = 100)
    @Column(name = "AccountName", nullable = false, length = 100)
    private String accountName;

    @NotBlank
    @Email
    @Size(max = 150)
    @Column(name = "AccountEmail", nullable = false, unique = true, length = 150)
    private String accountEmail;

    @NotNull
    @Column(name = "AccountRole", nullable = false)
    private Integer accountRoleCode; // 1 = ADMIN, 2 = STAFF

    @NotBlank
    @Size(min = 6, max = 255)
    @Column(name = "AccountPassword", nullable = false)
    private String accountPassword;

    @OneToMany(mappedBy = "createdBy")
    @JsonIgnore
    private List<NewsArticle> createdArticles = new ArrayList<>();

    @OneToMany(mappedBy = "updatedBy")
    @JsonIgnore
    private List<NewsArticle> updatedArticles = new ArrayList<>();

    @Transient
    @JsonIgnore
    public AccountRole getAccountRole() {
        return AccountRole.fromCode(accountRoleCode);
    }

    public void setAccountRole(AccountRole role) {
        this.accountRoleCode = role != null ? role.getCode() : null;
    }
}

