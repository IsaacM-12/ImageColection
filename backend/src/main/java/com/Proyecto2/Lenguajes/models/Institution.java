package com.Proyecto2.Lenguajes.models;

import javax.persistence.Entity;

@Entity
public class Institution extends Owner {

    private String website;

    public Institution() {
    }

    public Institution(String id, String name, String country, String phone, String email, String webSite) {
        super(id, name, country, phone, email);
        this.website = webSite;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }
}
