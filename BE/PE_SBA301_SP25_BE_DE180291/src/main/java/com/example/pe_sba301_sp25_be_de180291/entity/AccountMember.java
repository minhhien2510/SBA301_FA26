package com.example.pe_sba301_sp25_be_de180291.entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "AccountMember")
@Data
public class AccountMember {

    @Id
    @Column(length = 20)
    private String memberID;

    @Column(nullable = false, length = 80)
    private String memberPassword;

    @Column(nullable = false, length = 100)
    private String emailAddress;

    private Integer memberRole; // 1=Admin, 2=Staff, 3=Member
}
