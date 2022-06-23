import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="skill">SKILL</a>
          </li>
          <li>
            <a href="portfolio">PORTFOLIO</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
