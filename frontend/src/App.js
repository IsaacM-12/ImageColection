import Image from "./views/Image";
import Galery from "./views/Galery";
import Person from "./views/Person";
import CreatePerson from "./views/CreatePerson";
import UploaImage from "./views/UploadImage";
import Institution from "./views/Institution";
import CreateInstitution from "./views/CreateInstitution";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Taxon from "./views/Taxon";
import CreateTaxon from "./views/CreateTaxon";

function App() {
  function NotFound() {
    return (
      <div>
        <h1>La página que busca no existe</h1>
      </div>
    );
  }

  //Referencia las rutas a las que se quiere usar un componente especifico
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Galery />} />
          <Route path="image/:id" element={<Image />} />
          <Route path="image/upload" element={<UploaImage />} />

          <Route path="person" element={<Person />} />
          <Route path="person/create" element={<CreatePerson />} />
          
          <Route path="institution" element={<Institution />} />
          <Route path="institution/create" element={<CreateInstitution />} />

          <Route path="taxon" element={<Taxon />} />
          <Route path="taxon/create" element={<CreateTaxon />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
