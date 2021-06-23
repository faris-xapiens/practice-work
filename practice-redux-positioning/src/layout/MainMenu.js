import React from "react";
import NavbarMenu from "../components/NavbarMenu";

const MainMenu = ({ children }) => {
  return (
    <>
      <NavbarMenu />
      {children}
    </>
  );
};

export default MainMenu;
