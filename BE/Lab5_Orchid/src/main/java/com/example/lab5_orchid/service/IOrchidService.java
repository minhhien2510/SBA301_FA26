package com.example.lab5_orchid.service;

import com.example.lab5_orchid.pojos.Orchid;

import java.util.List;

public interface IOrchidService {

    List<Orchid> getAll();

    Orchid getById(Long id);

    Orchid create(Orchid orchid);

    Orchid update(Long id, Orchid orchid);

    void delete(Long id);
}
