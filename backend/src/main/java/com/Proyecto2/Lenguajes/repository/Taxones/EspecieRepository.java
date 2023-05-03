package com.Proyecto2.Lenguajes.repository.Taxones;

import com.Proyecto2.Lenguajes.models.Taxones.Especie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EspecieRepository extends JpaRepository<Especie, String> {
}
