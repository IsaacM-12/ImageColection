package com.Proyecto2.Lenguajes.models.Taxones;

import javax.persistence.Entity;

@Entity
public class Division extends Taxon{

    private String scientific_name;

    public Division() {
    }

    public Division(String id, String taxon_ancestor_id, String author, String publication_year, String scientific_name) {
        super(id, taxon_ancestor_id, author, publication_year);
        this.scientific_name = scientific_name;
    }

    public String getScientific_name() {
        return scientific_name;
    }

    public void setScientific_name(String scientific_name) {
        this.scientific_name = scientific_name;
    }

}
