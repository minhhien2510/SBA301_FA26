package com.example.pe_sba301_sp25_be_de180291.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CarRequestDTO {

    @NotBlank
    private String carName;

    @NotNull
    private Integer countryID;

    @NotNull
    private Short unitsInStock;

    @NotNull
    private Integer unitPrice;
}
