import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="logo__block">
        <span className={`nav__logo ${show && "nav__logo--black"}`}>N</span>
        <span className="logo__dot">.</span>
      </div>
      <div className="nav__links">
        <a href="usa">USA</a>
        <a href="ca">Canada</a>
        <a href="uk">UK</a>
        <a href="fr">France</a>
        <a href="gr">Germany</a>
        <a href="br">Brazil</a>
      </div>
    </div>
  );
};

export default Nav;
