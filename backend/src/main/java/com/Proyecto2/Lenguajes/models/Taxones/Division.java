package com.Proyecto2.Lenguajes.models.Taxones;

public class Division extends Reino{


    public Division() {
    }

    public Division(String id, String taxon_ancestor_id, String author, String publication_year, String scientific_name) {
        super(id, taxon_ancestor_id, author, publication_year, scientific_name);
    }

}
