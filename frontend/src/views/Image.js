import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "react-notifications/lib/notifications.css";
import { NotificationManager } from "react-notifications";

const Image = () => {
  const { id } = useParams();
  const [Information, setInformation] = useState([]);
  const [authorInformation, setauthorInformation] = useState([]);
  const [Image, setImage] = useState([]);

  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();
  function redirectGalery() {
    navigate("/");
  }

  // Trae todas las imagenes cada vez que refresque la pagina
  useEffect(() => {
    selectImageByID();
  }, []);

  // -------------------------------------------------------------
  // Tra el autor por el ID
  // -------------------------------------------------------------
  const autorByID = async (author) => {
    const serviceUrl = "http://localhost:8080/person/" + author;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config).catch((error) => {
      NotificationManager.error("Error", "Error al encontrar el autor", 5000);
    });

    if (response.data) {
      let personlist = (
        <>
          <br></br>
          <h3>Autor:</h3>
          <table>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
            <tr>
              <td>{response.data.id}</td>
              <td>{response.data.name}</td>
              <td>{response.data.last_name}</td>
            </tr>
          </table>
        </>
      );
      setauthorInformation(personlist);
    } else {
      setauthorInformation(<h2>No hay informacion del autor</h2>);
    }
  };

  // -------------------------------------------------------------
  // Carga los datos de una imagen en especifico
  // -------------------------------------------------------------
  const selectImageByID = async () => {
    const serviceUrl = `http://localhost:8080/image/` + id;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config);

    //manda a imprimir la informacion del autor
    autorByID(response.data.author_id);

    let image = (
      <div className="ful-img">
        <img src={response.data.url} />
      </div>
    );
    setImage(image);
    setInformation(
      <div>
        <a>Descripcion: {response.data.description}</a>
        <br></br>
        <br></br>
        <a>Licencia: {response.data.license}</a>
      </div>
    );
  };

  // -------------------------------------------------------------
  // Borra la image y lo redirigue a la galery
  // -------------------------------------------------------------
  const deleteImage = async () => {
    const serviceUrl = `http://localhost:8080/image/` + id;
    axios
      .delete(serviceUrl)
      .then(() => {
        NotificationManager.success("Success", "Borrado con exito");
      })
      .then(redirectGalery());
  };

  return (
    <div className="singleImage">
      <div className="ful-img">{Image}</div>

      <div className="information">
        {Information}
        {authorInformation}
      </div>

      <br></br>

      <button className="buttonDelete" onClick={deleteImage}>
        Borrar Imagen
      </button>
    </div>
  );
};

export default Image;
