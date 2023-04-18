package com.Proyecto2.Lenguajes.service;

import com.Proyecto2.Lenguajes.models.Image;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;


@Service
public class ImageService {

    @PersistenceContext
    EntityManager entityManager;

    //"{ call searchByKeyWords(String keyWords) }";
    // Busaca por KeyWords las imagenes y las devuelve usando un procedure
    public List<Image> searchImagesByKeyWords(String keyWords) {
        List<Image> imageList = new ArrayList<>();

        StoredProcedureQuery query = entityManager
                .createStoredProcedureQuery("searchByKeyWords")
                .registerStoredProcedureParameter("keyWords",String.class, ParameterMode.IN)
                .setParameter("keyWords", keyWords);

        query.execute();

        List<Object[]> respuesta = query.getResultList();

        // En la respuesta de el proedimiento mapea y mete la respuesta en un List<Image>
        for (Object[] registro : respuesta) {
            String id = registro[0].toString();
            String description = registro[1].toString();
            String url = registro[2].toString();
            Timestamp uploaddate = Timestamp.valueOf(registro[3].toString());
            String keywords = registro[4].toString();
            String author_id = registro[5].toString();
            String owner_id = registro[6].toString();
            String license = registro[7].toString();

            imageList.add(new Image(id, description, url, uploaddate, keywords, author_id, owner_id, license));
        }

        return imageList;

    }
}
