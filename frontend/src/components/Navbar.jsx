import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h2>Galería</h2>
      </Link>
      <Link to="/image/upload">
        <h2>Subir Imagen</h2>
      </Link>

      <Link to="/person">
        <h2>Personas</h2>
      </Link>
      <Link to="/person/create">
        <h2>Crear Persona</h2>
      </Link>

      <Link to="/institution">
        <h2>Instituciones</h2>
      </Link>
      <Link to="/institution/create">
        <h2>Crear Institución</h2>
      </Link>
    </div>
  );
};

export default Navbar;
