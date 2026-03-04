package com.example.pe_sba301_sp25_be_de180291.entity;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Country")
@Data
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer countryID;

    @Column(nullable = false, length = 15)
    private String countryName;
}
