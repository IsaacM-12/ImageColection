package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.Institution;
import com.Proyecto2.Lenguajes.repository.InstitutionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class InstitutionController {

    @Autowired
    private InstitutionRepository institutionRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/institution")
    public List<Institution> getInstitution() {
        return institutionRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/institution/{id}")
    public Institution getById(@PathVariable String id) {
        Optional<Institution> person = institutionRepository.findById(id);

        if(person.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return person.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/institution")
    public void createInstitution(@RequestBody Institution newPerson){
        String id = newPerson.getId();
        Optional<Institution> person = institutionRepository.findById(id);

        if(person.isEmpty()){
            institutionRepository.save(newPerson);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/institution/{id}")
    public void deleteInstitution(@PathVariable String id){
        Optional<Institution> institution = institutionRepository.findById(id);
        if(institution.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        institutionRepository.deleteById(id);
    }

}