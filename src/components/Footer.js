import React from "react";
import "./Footer.css";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <Scroll to="about">ABOUT</Scroll>
          </li>
          <li>
            <Scroll to="skill">SKILL</Scroll>
          </li>
          <li>
            <Scroll to="portfolio">PORTFOLIO</Scroll>
          </li>
        </ul>
      </nav>

      <div className="cr">
        <small>&copy; 2022 Toma Morino</small>
      </div>
    </div>
  );
};

export default Footer;
