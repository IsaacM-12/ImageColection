package com.Proyecto2.Lenguajes.DTO;


import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ImageDTO {
    @Id
    private String id;
    private String description;
    private String url;
    private String keywords;
    private String author_id;
    private String owner_id;
    private String license;




    public ImageDTO() {
    }

    public ImageDTO(String id, String description, String url, String keywords, String author_id, String owner_id, String license) {
        this.id = id;
        this.description = description;
        this.url = url;
        this.keywords = keywords;
        this.author_id = author_id;
        this.owner_id = owner_id;
        this.license = license;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public String getAuthor_id() {
        return author_id;
    }

    public void setAuthor_id(String author_id) {
        this.author_id = author_id;
    }

    public String getOwner_id() {
        return owner_id;
    }

    public void setOwner_id(String owner_id) {
        this.owner_id = owner_id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
}