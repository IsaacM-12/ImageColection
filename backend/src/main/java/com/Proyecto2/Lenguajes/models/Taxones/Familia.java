package com.Proyecto2.Lenguajes.models.Taxones;

public class Familia extends Orden {

    public Familia() {
    }

    public Familia(String id, String taxon_ancestor_id, String author, String publication_year, String scientific_name) {
        super(id, taxon_ancestor_id, author, publication_year, scientific_name);
    }
}