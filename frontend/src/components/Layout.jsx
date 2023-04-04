import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="principal">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
