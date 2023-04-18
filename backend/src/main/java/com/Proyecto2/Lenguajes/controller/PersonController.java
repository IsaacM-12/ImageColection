package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.Person;
import com.Proyecto2.Lenguajes.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/person")
    public List<Person> getPerson() {
        return personRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/person/{id}")
    public Person getById(@PathVariable String id) {
        Optional<Person> person = personRepository.findById(id);

        if(person.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return person.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/person")
    public void createPerson(@RequestBody Person newPerson){
        String id = newPerson.getId();
        Optional<Person> person = personRepository.findById(id);

        if(person.isEmpty()){
            personRepository.save(newPerson);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/person/{id}")
    public void deletePerson(@PathVariable String id){
        Optional<Person> person = personRepository.findById(id);
        if(person.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        personRepository.deleteById(id);
    }

}