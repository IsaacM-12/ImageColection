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

    let image = (
      <div className="ful-img">
        <img src={response.data.url} />
      </div>
    );
    setImage(image);
    setInformation(
      <div>
        <a>Descripcion: {response.data.description}</a>
        <br></br><br></br>
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

      <div className="information">{Information}</div>

      <br></br>

      <button className="buttonDelete" onClick={deleteImage}>
        Borrar Imagen
      </button>
    </div>
  );
};

export default Image;
