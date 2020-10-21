import React from "react";
import "./Header.css";
import Headlines from "./Headlines";

const Header = () => {
  return (
    <header>
      <div className="header">
        <Headlines />
      </div>
      <div className="header--blurTop" />
    </header>
  );
};

export default Header;
