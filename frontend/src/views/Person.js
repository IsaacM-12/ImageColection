import { useState, useEffect } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Person = () => {
  const [Person, setPerson] = useState([]);
  const [IDBorrar, setIDBorrar] = useState("");

  // Trae todas las personas cada vez que refresque la pagina
  useEffect(() => {
    selectPersonToBD();
  }, []);

  // -------------------------------------------------------------
  // selecciona todas las personas de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectPersonToBD = async () => {
    const serviceUrl = "http://localhost:8080/person";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    if (response.data.length > 0) {
      let personlist = response.data.map((item) => {
        return (
          <>
            <h3>
              id: {item.id} | name: {item.name}{" "}
            </h3>
          </>
        );
      });
      setPerson(personlist);
    } else {
      setPerson(<h2>No hay ninguna Persona</h2>);
    }
  };

  // -------------------------------------------------------------
  // Borra la persona
  // -------------------------------------------------------------
  const deletePersona = async (event) => {
    event.preventDefault();

    const serviceUrl = `http://localhost:8080/person/` + IDBorrar;
    axios
      .delete(serviceUrl)
      .then(() => {
        selectPersonToBD();
        NotificationManager.success("Success", "Borrado con exito", 5000);
      })
      .catch((error) => {
        NotificationManager.error("Error", "No encontrado", 5000, () => {
          alert("callback");
        });
      });
  };

  return (
    <div className="person">
      <h1> Personas </h1>

      <div>{Person}</div>

      <div>
        <button onClick={selectPersonToBD}>Cargar personas</button>
      </div>

      <div>
        <form onSubmit={deletePersona}>
          <br></br>
          <label>
            Id del Personaje a borrar:
            <input type="text" onChange={(e) => setIDBorrar(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <button className="buttonDelete">Borrar Persona</button>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Person;
