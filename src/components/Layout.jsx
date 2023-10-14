import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Routers from "../routers/Routers";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
