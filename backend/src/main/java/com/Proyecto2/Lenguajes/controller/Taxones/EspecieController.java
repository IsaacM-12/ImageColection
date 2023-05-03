package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Especie;
import com.Proyecto2.Lenguajes.repository.Taxones.EspecieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class EspecieController {

    @Autowired
    private EspecieRepository especieRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/especie")
    public List<Especie> getEspecie() {
        return especieRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/especie/{id}")
    public Especie getById(@PathVariable String id) {
        Optional<Especie> especie = especieRepository.findById(id);

        if(especie.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return especie.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/especie")
    public void createEspecie(@RequestBody Especie newEspecie){
        String id = newEspecie.getId();
        Optional<Especie> especie = especieRepository.findById(id);

        if(especie.isEmpty()){
            especieRepository.save(newEspecie);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/especie/{id}")
    public void deleteEspecie(@PathVariable String id){
        Optional<Especie> especie = especieRepository.findById(id);
        if(especie.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        especieRepository.deleteById(id);
    }


}
