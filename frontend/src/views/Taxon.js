import { useState, useEffect } from "react";
import axios from "axios";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { useNavigate } from "react-router-dom";

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
    selectDivisionToBD();
    selectClaseToBD();
    selectOrdenToBD();
    selectFamiliaToBD();
    selectGeneroToBD();
    selectEspecieToBD();
  }, []);

  // para cambiar la direccion del browser
  const navigate = useNavigate();
  function refresque() {
    navigate("/taxon");
  }

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
      setReino(<a>No hay ningun Reino</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las Divisiones de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectDivisionToBD = async () => {
    const serviceUrl = "http://localhost:8080/division";
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
      setDivision(taxonlist);
    } else {
      setDivision(<a>No hay ninguna Division</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las Clases de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectClaseToBD = async () => {
    const serviceUrl = "http://localhost:8080/clase";
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
      setClase(taxonlist);
    } else {
      setClase(<a>No hay ninguna Clase</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las Clases de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectOrdenToBD = async () => {
    const serviceUrl = "http://localhost:8080/orden";
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
      setOrden(taxonlist);
    } else {
      setOrden(<a>No hay ninguna Orden</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las Familias de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectFamiliaToBD = async () => {
    const serviceUrl = "http://localhost:8080/familia";
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
      setFamilia(taxonlist);
    } else {
      setFamilia(<a>No hay ninguna Familia</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todos los generos de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectGeneroToBD = async () => {
    const serviceUrl = "http://localhost:8080/genero";
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
      setGenero(taxonlist);
    } else {
      setGenero(<a>No hay ningun Genero</a>);
    }
  };

  // -------------------------------------------------------------
  // selecciona todas las especies de la base de datos y las pinta en el browser
  // -------------------------------------------------------------
  const selectEspecieToBD = async () => {
    const serviceUrl = "http://localhost:8080/especie";
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
      setEspecie(taxonlist);
    } else {
      setEspecie(<a>No hay ningun Especie</a>);
    }
  };

  // -------------------------------------------------------------
  // Borra un Taxon
  // -------------------------------------------------------------
  const deleteTaxon = async (event) => {
    event.preventDefault();

    const serviceUrl = `http://localhost:8080/` + taxonBorrar + `/` + IDBorrar;
    axios
      .delete(serviceUrl)
      .then(() => {
        refresque();
        NotificationManager.success("Success", "Borrado con exito", 5000);
      })
      .catch((error) => {
        NotificationManager.error(
          "Error",
          "Este taxon no existe, revise su clasificación",
          5000
        );
      });
  };

  return (
    <div className="taxon">
      <h1> Taxones </h1>

      <div className="information">
        <h3>Reinos</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table>{" "}
        {Reino}
        <h3>Divisiones</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table>
        {Division}
        <h3>Clases</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table>
        {Clase}
        <h3>Orden</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table> 
        {Orden}
        <h3>Familia</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table> 
        {Familia}
        <h3>Genero</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table> 
        {Genero}
        <h3>Especie</h3>
        <table>
          <tr>
            <th>ID</th>
            <th>taxon_ancestor_id</th>
            <th>scientific_name</th>
            <th>author</th>
            <th>publication_year</th>
          </tr>
        </table> 
        {Especie}
      </div>

      <div>
        <form onSubmit={deleteTaxon}>
          <br></br>
          Seleccione que desea borrar:
          <label>
            <select onChange={(e) => setTaxonBorrar(e.target.value)}>
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
