package com.example.lab5_orchid.repositories;

import com.example.lab5_orchid.pojos.Orchid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IOrchidRepository extends JpaRepository<Orchid, Long> {
}

