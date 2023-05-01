import { useState } from "react";
import { uploadFile } from "../firebase/config";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";

const UploaImage = () => {
  const [file, setFile] = useState(null);

  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("malo");
  const [owner, setOwner] = useState("");
  const [licencia, setLicencia] = useState("");
  const [taxon, setTaxon] = useState("");

  // para cambiar la direccion del browser a la inicial
  const navigate = useNavigate();
  function redirectGalery() {
    navigate("/");
  }

  function refresque() {
    navigate("/image/upload");
  }

  // -------------------------------------------------------------
  // Guarda la imagen en la base de datos
  // -------------------------------------------------------------
  function createImageBD(id, url) {
    var newImage = {
      id: id,
      description: description,
      url: url,
      keywords: "",
      author_id: author,
      owner_id: owner,
      license: licencia,
      taxon_id: taxon,
    };

    if (
      newImage.id === "" ||
      newImage.description === "" ||
      newImage.url === "" ||
      newImage.author_id === "" ||
      newImage.owner_id === "" ||
      newImage.license === "" ||
      newImage.taxon_id === ""
    ) {
      NotificationManager.warning(
        "Warning message",
        "Debe digitar todos los datos.",
        5000
      );
    } else {
      const serviceUrl = `http://localhost:8080/image`;
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(serviceUrl, newImage, config)
        .then(() => {
          NotificationManager.success("Success", "Creado con exito");
        })
        .then(redirectGalery())

        .catch((error) => {
          NotificationManager.error("Error", "Error");
        });
    }
  }

  // -------------------------------------------------------------
  // Revisa que el ID del autor ingresado exista comprobando en la BD
  // -------------------------------------------------------------
  const autorByID = async () => {
    const serviceUrl = "http://localhost:8080/person/" + author;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config).catch((error) => {
      NotificationManager.error("Error", "EL autor no existe", 5000);
    });

    return response.data.name;
  };


  // -------------------------------------------------------------
  // Revisa que el ID del owner ingresado exista comprobando en la BD
  // -------------------------------------------------------------
  const ownerByID = async () => {
    const serviceUrl = "http://localhost:8080/institution/" + owner;
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await axios.get(serviceUrl, config).catch((error) => {
      NotificationManager.error("Error", "EL owner no existe", 5000);
    });

    return response.data.name;
  };

  // -------------------------------------------------------------
  // Publica La imagen en firebase y le crea un URL
  // ademas llama la funcion createImage que la guarda en la base de datos
  // -------------------------------------------------------------

  const CreateImage = async (e) => {
    e.preventDefault();
    try {
      const buscarAutor = await autorByID();
      const buscarOwner = await ownerByID();

      const result = await uploadFile(file);
      const uniqueID = uuidv4();
      createImageBD(uniqueID, result);
    } catch (error) {
      NotificationManager.error(
        "Error",
        "Asegúrese que todos los campos sean validos",
        5000
      );
    }
  };

  return (
    <div className="uploadCSS">
      <h1> Subir Imagen </h1>

      <div>
        <form onSubmit={CreateImage}>
          <label>
            Imagen:
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Descripción:
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br></br>
          <br></br>
          <label>
            Autor ID:
            <input type="text" onChange={(e) => setAuthor(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Propietario ID:
            <input type="text" onChange={(e) => setOwner(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          <label>
            Taxon ID:
            <input type="text" onChange={(e) => setTaxon(e.target.value)} />
          </label>
          <br></br>
          <br></br>
          Licencia:
          <label>
            <select onChange={(e) => setLicencia(e.target.value)}>
              <option value="CC BY">CC BY</option>
              <option value="CC BY-SA">CC BY-SA</option>
              <option value="CC BY-ND">CC BY-ND</option>
              <option value="CC BY-NC">CC BY-NC</option>
              <option value="CC BY-NC-SA">CC BY-NC-SA</option>
              <option value="CC BY-NC-NC">CC BY-ND-NC</option>
            </select>
          </label>
          <br></br>
          <br></br>
          <button>Subir Imagen</button>
        </form>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default UploaImage;
