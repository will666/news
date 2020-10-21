import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <span className="footer__info__text">
          N<span>.</span>
        </span>
      </div>
      <div className="footer__info">
        <h3 className="footer__title">Countries</h3>
        <a href="/" className="footer__info__link">
          USA
        </a>
        <a href="/" className="footer__info__link">
          Canada
        </a>
        <a href="/" className="footer__info__link">
          UK
        </a>
        <a href="/" className="footer__info__link">
          France
        </a>
        <a href="/" className="footer__info__link">
          Germany
        </a>
        <a href="/?q=brazil" className="footer__info__link">
          Brazil
        </a>
      </div>
      <div className="footer__info">
        <h3 className="footer__title">Categories</h3>
        <a href="/" className="footer__info__link">
          General
        </a>
        <a href="/" className="footer__info__link">
          Entertainment
        </a>
        <a href="/" className="footer__info__link">
          Business
        </a>
        <a href="/" className="footer__info__link">
          Politic
        </a>
        <a href="/" className="footer__info__link">
          Health
        </a>
        <a href="/?q=brazil" className="footer__info__link">
          Science
        </a>
        <a href="/?q=brazil" className="footer__info__link">
          Technology
        </a>
        <a href="/?q=brazil" className="footer__info__link">
          Sports
        </a>
      </div>
      <div className="footer__credits">&copy; 2020 News</div>
    </div>
  );
};

export default Footer;
