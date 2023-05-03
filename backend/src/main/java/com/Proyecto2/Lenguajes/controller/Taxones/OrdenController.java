package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Orden;
import com.Proyecto2.Lenguajes.repository.Taxones.OrdenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class OrdenController {

    @Autowired
    private OrdenRepository ordenRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/orden")
    public List<Orden> getOrden() {
        return ordenRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/orden/{id}")
    public Orden getById(@PathVariable String id) {
        Optional<Orden> orden = ordenRepository.findById(id);

        if(orden.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return orden.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/orden")
    public void createOrden(@RequestBody Orden newImage){
        String id = newImage.getId();
        Optional<Orden> orden = ordenRepository.findById(id);

        if(orden.isEmpty()){
            ordenRepository.save(newImage);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/orden/{id}")
    public void deleteOrden(@PathVariable String id){
        Optional<Orden> orden = ordenRepository.findById(id);
        if(orden.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        ordenRepository.deleteById(id);
    }


}
