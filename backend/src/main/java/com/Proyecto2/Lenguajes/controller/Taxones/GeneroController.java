package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Genero;
import com.Proyecto2.Lenguajes.repository.Taxones.GeneroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class GeneroController {

    @Autowired
    private GeneroRepository generoRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/genero")
    public List<Genero> getGenero() {
        return generoRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/genero/{id}")
    public Genero getById(@PathVariable String id) {
        Optional<Genero> genero = generoRepository.findById(id);

        if(genero.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return genero.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/genero")
    public void createGenero(@RequestBody Genero newgenero){
        String id = newgenero.getId();
        Optional<Genero> genero = generoRepository.findById(id);

        if(genero.isEmpty()){
            generoRepository.save(newgenero);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/genero/{id}")
    public void deleteGenero(@PathVariable String id){
        Optional<Genero> genero = generoRepository.findById(id);
        if(genero.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        generoRepository.deleteById(id);
    }


}
