import React from "react";
import logo from "../assets/logo.svg";
import { Img } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="header">
      <div>
        <Img src={logo} alt="Logo" />
      </div>
      <div className="btn">
        <button>Book as seat</button>
      </div>
    </div>
  );
};

export default Header;
