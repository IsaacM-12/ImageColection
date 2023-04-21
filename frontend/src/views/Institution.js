import { useState, useEffect } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Institution = () => {
  const [Institution, setInstitution] = useState([]);
  const [IDBorrar, setIDBorrar] = useState("");

  // Trae todas las personas cada vez que refresque la pagina
  useEffect(() => {
    selectInstitutionToBD();
  }, []);

  // -------------------------------------------------------------
  // selecciona todas las Instituciones de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectInstitutionToBD = async () => {
    const serviceUrl = "http://localhost:8080/institution";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    if (response.data.length > 0) {
      let institutionlist = response.data.map((item) => {
        return (
          <>
            <table>
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.website}</td>
                <td>{item.email}</td>
                <td>{item.country}</td>
                <td>{item.phone}</td>
              </tr>
            </table>
          </>
        );
      });
      setInstitution(institutionlist);
    } else {
      setInstitution(<h2>No hay ninguna Institución</h2>);
    }
  };

  // -------------------------------------------------------------
  // Borra la Institution
  // -------------------------------------------------------------
  const deleteInstitution = async (event) => {
    event.preventDefault();

    const serviceUrl = `http://localhost:8080/institution/` + IDBorrar;
    axios
      .delete(serviceUrl)
      .then(() => {
        selectInstitutionToBD();
        NotificationManager.success("Success", "Borrado con exito", 5000);
      })
      .catch((error) => {
        NotificationManager.error("Error", "No encontrado", 5000, () => {
          alert("callback");
        });
      });
  };

  return (
    <div className="institution">
      <h1> Instituciones </h1>

      <div className="information">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Website</th>
            <th>Email</th>
            <th>Pais</th>
            <th>Telefono</th>
          </tr>
        </table>
        {Institution}
      </div>

      <div className="space">
        <button onClick={selectInstitutionToBD}>Cargar Instituciones</button>
      </div>

      <div>
        <form onSubmit={deleteInstitution}>
          <br></br>
          <label>
            Id de la Institucion a borrar:
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

export default Institution;
