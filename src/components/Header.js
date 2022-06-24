import React from "react";
import "./Header.css";
import { Link as Scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Scroll to="about" smooth="true" duration="600" offset={-60}>
              ABOUT
            </Scroll>
          </li>
          <li>
            <Scroll to="skill" smooth="true" duration="600" offset={-60}>
              SKILL
            </Scroll>
          </li>
          <li>
            <Scroll to="portfolio">PORTFOLIO</Scroll>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
