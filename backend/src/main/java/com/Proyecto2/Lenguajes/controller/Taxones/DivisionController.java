package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Division;
import com.Proyecto2.Lenguajes.repository.Taxones.DivisionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class DivisionController {

    @Autowired
    private DivisionRepository divisionRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/division")
    public List<Division> getDivision() {
        return divisionRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/division/{id}")
    public Division getById(@PathVariable String id) {
        Optional<Division> division = divisionRepository.findById(id);

        if(division.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return division.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/division")
    public void createDivision(@RequestBody Division newdivision){
        String id = newdivision.getId();
        Optional<Division> division = divisionRepository.findById(id);

        if(division.isEmpty()){
            divisionRepository.save(newdivision);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/division/{id}")
    public void deleteDivision(@PathVariable String id){
        Optional<Division> division = divisionRepository.findById(id);
        if(division.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        divisionRepository.deleteById(id);
    }


}
