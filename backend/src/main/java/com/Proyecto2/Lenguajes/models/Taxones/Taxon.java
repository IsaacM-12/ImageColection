package com.Proyecto2.Lenguajes.models.Taxones;

import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Taxon {

    @Id
    private String id;
    private String taxon_ancestor_id;
    private String author;
    private String publication_year;

    public Taxon() {
    }

    public Taxon(String id, String taxon_ancestor_id, String author, String publication_year) {
        this.id = id;
        this.taxon_ancestor_id = taxon_ancestor_id;
        this.author = author;
        this.publication_year = publication_year;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTaxon_ancestor_id() {
        return taxon_ancestor_id;
    }

    public void setTaxon_ancestor_id(String taxon_ancestor_id) {
        this.taxon_ancestor_id = taxon_ancestor_id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getPublication_year() {
        return publication_year;
    }

    public void setPublication_year(String publication_year) {
        this.publication_year = publication_year;
    }
}
