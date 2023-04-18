package com.Proyecto2.Lenguajes.models;

import javax.persistence.Entity;

@Entity
public class Person extends Owner{
    private String last_name;

    public Person() {
    }

    public Person(String id, String name, String country, String phone, String email, String last_name) {
        super(id, name, country, phone, email);
        this.last_name = last_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
}
