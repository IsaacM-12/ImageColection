import { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { v4 as uuidv4 } from "uuid";

const CreateInstitution = () => {
  const [name, serName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  // -------------------------------------------------------------
  // Guarda la persona en la base de datos
  // -------------------------------------------------------------
  function createInstitutionBD(id) {
    var newPerson = {
      id: id,
      name: name,
      country: country,
      phone: phone,
      email: email,
      website: website,
    };

    if (
      newPerson.id === "" ||
      newPerson.name === "" ||
      newPerson.country === "" ||
      newPerson.phone === "" ||
      newPerson.email === "" ||
      newPerson.website === ""
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/institution`;
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
          NotificationManager.error("Error", "Error", 5000, () => {
            alert("callback");
          });
        });
    }
  }

  // -------------------------------------------------------------
  // Recibe la accion y manda a guardar la Institucion en la base de datos
  // -------------------------------------------------------------
  const CreateInstitutions = async (e) => {
    e.preventDefault();
    try {
      const uniqueID = uuidv4();
      createInstitutionBD(uniqueID);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploadCSS">
      <div>
        <h1> Crear una Institución</h1>
        <form onSubmit={CreateInstitutions}>
          <br></br>
          <label>
            Nombre:
            <input type="text" onChange={(e) => serName(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Website:
            <input type="text" onChange={(e) => setWebsite(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Pais:
            <input type="text" onChange={(e) => setCountry(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          Email:
          <label>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          Telefono:
          <label>
            <input type="text" onChange={(e) => setPhone(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <button>Subir persona</button>
        </form>
      </div>

      <NotificationContainer />
    </div>
  );
};

export default CreateInstitution;
