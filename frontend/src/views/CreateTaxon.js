import { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { v4 as uuidv4 } from "uuid";

const CreateTaxon = () => {
  const [taxon_ancestor_id, setTaxon_ancestor_id] = useState("");
  const [scientific_name, setScientific_name] = useState("");
  const [author, setauthor] = useState("");
  const [publication_year, setPublication_year] = useState("");

  const [taxonCrear, setTaxonCrear] = useState("");

  // -------------------------------------------------------------
  // Guarda el taxon en la base de datos
  // -------------------------------------------------------------
  function createTaxonBD(id) {
    var newPerson = {
      id: id,
      taxon_ancestor_id: taxon_ancestor_id,
      author: author,
      publication_year: publication_year,
      scientific_name: scientific_name,
    };

    if (
      newPerson.taxon_ancestor_id === "" ||
      newPerson.scientific_name === "" ||
      newPerson.author === "" ||
      newPerson.publication_year === ""
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/` + taxonCrear;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(serviceUrl, newPerson, config)
        .then(() => {
          NotificationManager.success("Success", "Creado con exito");
        })

        .catch((error) => {
          NotificationManager.error("Error", "Revisa que todos los campos sean validos");
        });
    }
  }

  // -------------------------------------------------------------
  // Recibe la accion y manda a guardar el taxon en la base de datos
  // -------------------------------------------------------------
  const CreateTaxons = async (e) => {
    e.preventDefault();
    try {
      const uniqueID = uuidv4();
      createTaxonBD(uniqueID);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploadTaxon">
      <div>
        <h1> Crear un Taxon </h1>
        <form onSubmit={CreateTaxons}>
          <br></br>
          <label>
            Seleccione que desea agregar:
            <select onChange={(e) => setTaxonCrear(e.target.value)}>
              <option value="none">None</option>
              <option value="reino">Reino</option>
              <option value="division">Division</option>
              <option value="clase">Clase</option>
              <option value="orden">Orden</option>
              <option value="familia">Familia</option>
              <option value="genero">Genero</option>
              <option value="especie">Especie</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Id Ancestro:
            <input
              type="text"
              onChange={(e) => setTaxon_ancestor_id(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Nombre cientifico:
            <input
              type="text"
              onChange={(e) => setScientific_name(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Autor:
            <input type="text" onChange={(e) => setauthor(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          Año de publicacion:
          <label>
            <input
              type="date"
              onChange={(e) => setPublication_year(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <button>Subir Taxon</button>
        </form>
      </div>

      <NotificationContainer />
    </div>
  );
};

export default CreateTaxon;
