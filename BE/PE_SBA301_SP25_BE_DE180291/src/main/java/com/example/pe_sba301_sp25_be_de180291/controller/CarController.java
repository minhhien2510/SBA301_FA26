package com.example.pe_sba301_sp25_be_de180291.controller;

import com.example.pe_sba301_sp25_be_de180291.dto.CarRequestDTO;
import com.example.pe_sba301_sp25_be_de180291.dto.CarResponseDTO;
import com.example.pe_sba301_sp25_be_de180291.service.CarService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@RequiredArgsConstructor
@CrossOrigin
public class CarController {

    private final CarService carService;

    @GetMapping
    public List<CarResponseDTO> getAll(){
        return carService.getAll();
    }

    @PostMapping
    public CarResponseDTO create(
            @RequestBody @Valid CarRequestDTO dto){
        return carService.create(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Integer id){
        carService.delete(id);
    }
}