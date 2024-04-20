import React from "react";
import { CButton } from "@coreui/react";
import "./HomePage.scss";
import { BiMenuAltRight } from "react-icons/bi";

const HeaderNavbar = () => {
  return (
    <div className="header_navbar">
      <div className="navbar_logo">
        <img src="./images/Logo.png" alt="logo" />
      </div>
      <div className="navbar_menu_button">
        <div className="btn_signUp">
          <CButton className="btn_signUp_button">Sign Up</CButton>
        </div>
        <div className="icon_menu">
          <BiMenuAltRight className="icon_menu_icon" />
        </div>
      </div>
    </div>
  );
};

export default HeaderNavbar;
