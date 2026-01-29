package com.example.lab5_orchid.service;

import com.example.lab5_orchid.exception.ResourceNotFoundException;
import com.example.lab5_orchid.pojos.Orchid;
import com.example.lab5_orchid.repositories.ICategoryRepository;
import com.example.lab5_orchid.repositories.IOrchidRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrchidService implements IOrchidService {

    @Autowired
    private IOrchidRepository orchidRepo;

    @Autowired
    private ICategoryRepository categoryRepo;

    @Override
    public List<Orchid> getAll() {
        return orchidRepo.findAll();
    }

    @Override
    public Orchid getById(Long id) {
        return orchidRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Orchid not found " + id));
    }

    @Override
    public Orchid create(Orchid orchid) {
        return orchidRepo.save(orchid);
    }

    @Override
    public Orchid update(Long id, Orchid orchid) {

        Orchid old = getById(id);

        old.setOrchidName(orchid.getOrchidName());
        old.setNatural(orchid.isNatural());
        old.setOrchidDescription(orchid.getOrchidDescription());
        old.setAttractive(orchid.isAttractive());
        old.setOrchidURL(orchid.getOrchidURL());
        old.setCategory(orchid.getCategory());

        return orchidRepo.save(old);
    }

    @Override
    public void delete(Long id) {
        orchidRepo.delete(getById(id));
    }
}

