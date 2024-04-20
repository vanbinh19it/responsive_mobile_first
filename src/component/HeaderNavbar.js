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
      {/* <div className="navbar_menu"> */}
      <ul className="navbar_menu_item">
        <li className="navbar_menu_list_item">Home</li>
        <li className="navbar_menu_list_item">Product</li>
        <li className="navbar_menu_list_item">About</li>
        <li className="navbar_menu_list_item">Contact</li>
      </ul>
      {/* </div> */}
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
