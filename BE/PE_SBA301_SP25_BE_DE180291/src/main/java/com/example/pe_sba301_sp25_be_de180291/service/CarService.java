package com.example.pe_sba301_sp25_be_de180291.service;

import com.example.pe_sba301_sp25_be_de180291.dto.CarRequestDTO;
import com.example.pe_sba301_sp25_be_de180291.dto.CarResponseDTO;
import com.example.pe_sba301_sp25_be_de180291.entity.Car;
import com.example.pe_sba301_sp25_be_de180291.entity.Country;
import com.example.pe_sba301_sp25_be_de180291.repository.CarRepository;
import com.example.pe_sba301_sp25_be_de180291.repository.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CarService {

    private final CarRepository carRepo;
    private final CountryRepository countryRepo;

    public List<CarResponseDTO> getAll(){
        return carRepo.findAll()
                .stream()
                .map(c -> new CarResponseDTO(
                        c.getCarID(),
                        c.getCarName(),
                        c.getUnitsInStock(),
                        c.getUnitPrice(),
                        c.getCountry().getCountryName(),
                        c.getCreatedAt(),
                        c.getUpdatedAt()
                ))
                .sorted((a,b)-> b.getCarID()-a.getCarID())
                .toList();
    }

    public CarResponseDTO create(CarRequestDTO dto){

        if(dto.getUnitsInStock() < 5 || dto.getUnitsInStock() > 20)
            throw new RuntimeException("UnitsInStock must be 5-20");

        if(dto.getCarName().length() <= 10)
            throw new RuntimeException("CarName > 10 chars required");

        Country country = countryRepo.findById(dto.getCountryID())
                .orElseThrow();

        Car car = new Car();
        car.setCarName(dto.getCarName());
        car.setCountry(country);
        car.setUnitsInStock(dto.getUnitsInStock());
        car.setUnitPrice(dto.getUnitPrice());
        car.setCreatedAt(LocalDateTime.now());
        car.setUpdatedAt(LocalDateTime.now());

        carRepo.save(car);

        return new CarResponseDTO(
                car.getCarID(),
                car.getCarName(),
                car.getUnitsInStock(),
                car.getUnitPrice(),
                country.getCountryName(),
                car.getCreatedAt(),
                car.getUpdatedAt()
        );
    }

    public void delete(Integer id){
        carRepo.deleteById(id);
    }
}
