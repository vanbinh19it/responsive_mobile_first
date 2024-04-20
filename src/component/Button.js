import React from "react";
import "./HomePage.scss";

const Button = () => {
  return (
    <div className="button_container">
      <button className="btn button_container_item button_started">
        get started
      </button>
      <button className="btn button_container_item button_free">
        try for free
      </button>
    </div>
  );
};

export default Button;
