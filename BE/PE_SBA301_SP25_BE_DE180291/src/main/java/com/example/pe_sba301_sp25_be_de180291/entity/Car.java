package com.example.pe_sba301_sp25_be_de180291.entity;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "Cars")
@Data
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer carID;

    @Column(nullable = false, length = 40)
    private String carName;

    @ManyToOne
    @JoinColumn(name = "countryID", nullable = false)
    private Country country;

    @Column(nullable = false)
    private Short unitsInStock;

    @Column(nullable = false)
    private Integer unitPrice;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
