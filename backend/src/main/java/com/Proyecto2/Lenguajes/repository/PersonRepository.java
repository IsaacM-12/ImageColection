package com.Proyecto2.Lenguajes.repository;

import com.Proyecto2.Lenguajes.models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, String> {
}
