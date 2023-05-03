package com.Proyecto2.Lenguajes.controller.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Reino;
import com.Proyecto2.Lenguajes.repository.Taxones.ReinoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController

public class ReinoController {

    @Autowired
    private ReinoRepository reinoRepository;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/reino")
    public List<Reino> getImages() {
        return reinoRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/reino/{id}")
    public Reino getById(@PathVariable String id) {
        Optional<Reino> image = reinoRepository.findById(id);

        if(image.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return image.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/reino")
    public void createImage(@RequestBody Reino newImage){
        String id = newImage.getId();
        Optional<Reino> image = reinoRepository.findById(id);

        if(image.isEmpty()){
            reinoRepository.save(newImage);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/reino/{id}")
    public void deleteImage(@PathVariable String id){
        Optional<Reino> image = reinoRepository.findById(id);
        if(image.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        reinoRepository.deleteById(id);
    }


}
