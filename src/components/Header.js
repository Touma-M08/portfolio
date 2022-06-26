import React from "react";
import "./Header.css";
import { Link as Scroll } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggle = () => {
    setIsNavOpen((current) => !current);
  };

  return (
    <div className={"header" + (isNavOpen ? " active" : "")}>
      <nav>
        <ul>
          <li>
            <Scroll
              to="about"
              smooth="true"
              duration={600}
              offset={-60}
              onClick={toggle}
            >
              ABOUT
            </Scroll>
          </li>
          <li>
            <Scroll
              to="skill"
              smooth="true"
              duration={600}
              offset={-60}
              onClick={toggle}
            >
              SKILL
            </Scroll>
          </li>
          <li>
            <Scroll
              to="portfolio"
              smooth="true"
              duration={600}
              offset={-60}
              onClick={toggle}
            >
              PORTFOLIO
            </Scroll>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Header;
