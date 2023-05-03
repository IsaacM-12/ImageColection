package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Familia;
import com.Proyecto2.Lenguajes.repository.Taxones.FamiliaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class FamiliaController {

    @Autowired
    private FamiliaRepository familiaRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/familia")
    public List<Familia> getFamilia() {
        return familiaRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/familia/{id}")
    public Familia getById(@PathVariable String id) {
        Optional<Familia> familia = familiaRepository.findById(id);

        if(familia.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return familia.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/familia")
    public void createFamilia(@RequestBody Familia newfamilia){
        String id = newfamilia.getId();
        Optional<Familia> familia = familiaRepository.findById(id);

        if(familia.isEmpty()){
            familiaRepository.save(newfamilia);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/familia/{id}")
    public void deleteFamilia(@PathVariable String id){
        Optional<Familia> familia = familiaRepository.findById(id);
        if(familia.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        familiaRepository.deleteById(id);
    }


}
