import React from "react";
import AboutImage from "../image/about.jpg";

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="wrapper">
          <h2 className="section-ttl __about">自己紹介</h2>

          <div className="content">
            <img src={AboutImage} alt="イメージ画像" />

            <div className="profile">
              <p>名前：森野 刀磨</p>
              <p>年齢：２２</p>
              <p>学歴：群馬大学大学院理工学府に在籍中</p>
              <p>趣味：ギター，スノーボード</p>
              <p>プログラミング歴：2ヶ月</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
