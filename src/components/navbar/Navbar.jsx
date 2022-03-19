import React from "react";
import { NavBarProvider } from "./context/navbarContext";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  return (
    <NavBarProvider>
      <NavbarContent />
    </NavBarProvider>
  );
};

export default Navbar;
