package com.Proyecto2.Lenguajes.models.Taxones;

public class Especie extends Genero{

    private static int cantidadEspecies;

    public Especie() {
    }

    public Especie(String id, String taxon_ancestor_id, String author, String publication_year, String scientific_name) {
        super(id, taxon_ancestor_id, author, publication_year, scientific_name);
    }

    public static int getCantidadEspecies() {
        return cantidadEspecies;
    }

    public static void setCantidadEspecies(int cantidadEspecies) {
        Especie.cantidadEspecies = cantidadEspecies;
    }
}
