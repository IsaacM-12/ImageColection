package com.Proyecto2.Lenguajes.models.Taxones;

import javax.persistence.Entity;

@Entity
public class Clase extends Taxon{

    private String scientific_name;
    private static int cantidad_clases;

    public Clase() {
    }

    public Clase(String id, String taxon_ancestor_id, String author, String publication_year, String scientific_name) {
        super(id, taxon_ancestor_id, author, publication_year);
        this.scientific_name = scientific_name;
        cantidad_clases++;
    }

    public String getScientific_name() {
        return scientific_name;
    }

    public void setScientific_name(String scientific_name) {
        this.scientific_name = scientific_name;
    }

    public static int getCantidad_clases() {
        return cantidad_clases;
    }

    public static void setCantidad_clases(int cantidad_clases) {
        Clase.cantidad_clases = cantidad_clases;
    }
}

