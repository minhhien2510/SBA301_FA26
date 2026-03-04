package com.example.pe_sba301_sp25_be_de180291.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class CarResponseDTO {

    private Integer carID;
    private String carName;
    private Short unitsInStock;
    private Integer unitPrice;
    private String countryName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
