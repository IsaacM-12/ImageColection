import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="menu">
      <Link to="/">
        <h3>Galería</h3>
      </Link>
      <Link to="/image/upload">
        <h3>Subir Imagen</h3>
      </Link>

      <Link to="/person">
        <h3>Personas</h3>
      </Link>
      <Link to="/person/create">
        <h3>Crear Persona</h3>
      </Link>

      <Link to="/institution">
        <h3>Instituciones</h3>
      </Link>
      <Link to="/institution/create">
        <h3>Crear Institución</h3>
      </Link>

      <Link to="/taxon">
        <h3>Taxones</h3>
      </Link>
      <Link to="/taxon/create">
        <h3>Crear Taxon</h3>
      </Link>
    </div>
  );
};

export default Navbar;
