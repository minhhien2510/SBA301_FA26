package com.example.lab5_orchid.controller;

import com.example.lab5_orchid.pojos.Orchid;
import com.example.lab5_orchid.service.IOrchidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orchids")
@CrossOrigin("*")
public class OrchidController {

    @Autowired
    private IOrchidService service;

    @GetMapping
    public List<Orchid> getAll(){
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Orchid getById(@PathVariable Long id){
        return service.getById(id);
    }

    @PostMapping
    public ResponseEntity<Orchid> create(@RequestBody Orchid orchid){
        return new ResponseEntity<>(service.create(orchid), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public Orchid update(@PathVariable Long id, @RequestBody Orchid orchid){
        return service.update(id, orchid);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

