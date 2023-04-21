import { useState } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import { v4 as uuidv4 } from "uuid";

const CreatePerson = () => {
  const [name, serName] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setlastName] = useState("");

  // -------------------------------------------------------------
  // Guarda la persona en la base de datos
  // -------------------------------------------------------------
  function createPersonBD(id) {
    var newPerson = {
      id: id,
      name: name,
      country: country,
      phone: phone,
      email: email,
      last_name: lastName,
    };

    if (
      newPerson.id === "" ||
      newPerson.name === "" ||
      newPerson.country === "" ||
      newPerson.phone === "" ||
      newPerson.email === "" ||
      newPerson.lastName === ""
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/person`;
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
  // Recibe la accion y manda a guardar la persona en la base de datos
  // -------------------------------------------------------------
  const CreatePersons = async (e) => {
    e.preventDefault();
    try {
      const uniqueID = uuidv4();
      createPersonBD(uniqueID);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="uploadCSS">
      <div>
        <h1> Crear una persona </h1>
        <form onSubmit={CreatePersons}>
          <br></br>
          <label>
            Nombre:
            <input type="text" onChange={(e) => serName(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Apellidos:
            <input type="text" onChange={(e) => setlastName(e.target.value)} />
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

export default CreatePerson;
