package com.Proyecto2.Lenguajes.controller;

import com.Proyecto2.Lenguajes.models.Image;
import com.Proyecto2.Lenguajes.repository.ImageRepository;
import com.Proyecto2.Lenguajes.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController

public class ImageController {

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private ImageService imageService;

    // seleccionar todos
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/image")
    public List<Image> getImages() {
        return imageRepository.findAll();
    }

    // seleccionar por id
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/image/{id}")
    public Image getById(@PathVariable String id) {
        Optional<Image> image = imageRepository.findById(id);

        if(image.isEmpty()){
            throw new RuntimeException("not found: " + id);
        }
        return image.get();
    }

    // crear
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/image")
    public void createImage(@RequestBody Image newImage){
        String id = newImage.getId();
        Optional<Image> image = imageRepository.findById(id);

        if(image.isEmpty()){
            Date date = new Date();
            Timestamp timestamp = new Timestamp(date.getTime());
            newImage.setUpload_date(timestamp);

            imageRepository.save(newImage);
        }
        else {
            throw new RuntimeException("ID ocupado: " + id);
        }
    }

    // borra por Id
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/image/{id}")
    public void deleteImage(@PathVariable String id){
        Optional<Image> image = imageRepository.findById(id);
        if(image.isEmpty()){
            throw  new RuntimeException("not found: " + id);
        }
        imageRepository.deleteById(id);
    }

    // seleccionar todas las imagenes por key
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/find/{key}")
    public List<Image> getImagesByKeysWord(@PathVariable String key) {
        return imageService.searchImagesByKeyWords(key);
    }

}
