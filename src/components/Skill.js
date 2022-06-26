import React from "react";
import HTMLImage from "../image/html.svg";
import CSSImage from "../image/css.svg";
import ReactImage from "../image/react.svg";
import RailsImage from "../image/rails.svg";

const Skill = () => {
  return (
    <div className="pd __skill">
      <div className="skill">
        <div className="wrapper">
          <h2 className="section-ttl __skill">使用言語</h2>
          <ul>
            <li>
              <div className="img-box">
                <img className="HTML" src={HTMLImage} alt="HTML" />
                <img className="CSS" src={CSSImage} alt="CSS" />
              </div>

              <h3 className="name">HTML/CSS</h3>

              <p className="detail">テキストテキスト</p>
            </li>

            <li>
              <img src={ReactImage} alt="React" />

              <h3 className="name">React</h3>
              <p className="detail">テキストテキスト</p>
            </li>

            <li>
              <img src={RailsImage} alt="Rails" />

              <h3 className="name">Ruby on Rails</h3>
              <p className="detail">テキストテキスト</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
