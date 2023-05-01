import { useState, useEffect } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Taxon = () => {
  const [Clase, setClase] = useState([]);
  const [Division, setDivision] = useState([]);
  const [Especie, setEspecie] = useState([]);
  const [Familia, setFamilia] = useState([]);
  const [Genero, setGenero] = useState([]);
  const [Orden, setOrden] = useState([]);
  const [Reino, setReino] = useState([]);
  const [IDBorrar, setIDBorrar] = useState("");
  const [taxonBorrar, setTaxonBorrar] = useState("");

  // Trae todas las personas cada vez que refresque la pagina
  useEffect(() => {
    selectTReinoToBD();
  }, []);

  // -------------------------------------------------------------
  // selecciona todos los reinos de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectTReinoToBD = async () => {
    const serviceUrl = "http://localhost:8080/reino";
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    if (response.data.length > 0) {
      let taxonlist = response.data.map((item) => {
        return (
          <>
            <table>
              <tr>
                <td>{item.id}</td>
                <td>{item.taxon_ancestor_id}</td>
                <td>{item.scientific_name}</td>
                <td>{item.author}</td>
                <td>{item.publication_year}</td>
              </tr>
            </table>
          </>
        );
      });
      setReino(taxonlist);
    } else {
      setReino(<h2>No hay ningun Reino</h2>);
    }
  };


  // -------------------------------------------------------------
  // Borra un Reino
  // -------------------------------------------------------------
  const deleteReino = async (event) => {
    event.preventDefault();

    const serviceUrl = `http://localhost:8080/` + taxonBorrar + `/` + IDBorrar;
    axios
      .delete(serviceUrl)
      .then(() => {
        selectTReinoToBD();
        NotificationManager.success("Success", "Borrado con exito", 5000);
      })
      .catch((error) => {
        NotificationManager.error("Error", "No se puedo borrar", 5000);
      });
  };

  return (
    <div>
      <h1> Taxones </h1>

      <div className="information">
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table>
        {Reino}

      </div>


      <div>
        <form onSubmit={deleteReino}>
          <br></br>
          Seleccione que desea borrar:
          <label>
            <select onChange={(e) => setTaxonBorrar(e.target.value)}>
              <option value="none">None</option>
              <option value="reino">Reino</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <label>
            Id del Taxon a borrar:
            <input type="text" onChange={(e) => setIDBorrar(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <button className="buttonDelete">Borrar Taxon</button>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default Taxon;
