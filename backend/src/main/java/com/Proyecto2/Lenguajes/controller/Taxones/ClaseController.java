package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Clase;
import com.Proyecto2.Lenguajes.repository.Taxones.ClaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class ClaseController {

    @Autowired
    private ClaseRepository claseRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/clase")
    public List<Clase> getClases() {
        return claseRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/clase/{id}")
    public Clase getById(@PathVariable String id) {
        Optional<Clase> clase = claseRepository.findById(id);

        if(clase.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return clase.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/clase")
    public void createClase(@RequestBody Clase newclase){
        String id = newclase.getId();
        Optional<Clase> clase = claseRepository.findById(id);

        if(clase.isEmpty()){
            claseRepository.save(newclase);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/clase/{id}")
    public void deleteClase(@PathVariable String id){
        Optional<Clase> clase = claseRepository.findById(id);
        if(clase.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        claseRepository.deleteById(id);
    }


}
