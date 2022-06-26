import React from "react";
import { useState } from "react";

const PortfolioItem = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickPortfolio = () => {
    setIsModalOpen(true);
  };

  const handleClickClose = () => {
    setIsModalOpen(false);
  };

  return (
    <li>
      <div className="portfolio-box">
        <img
          src={props.image}
          alt={props.title}
          onClick={handleClickPortfolio}
        />
        <p>{props.title}</p>
      </div>

      <div className={"modal" + (isModalOpen ? " active" : "")}>
        <div className="modal-inner">
          <img src={props.image} alt={props.title} />
          <p className="portfolio-ttl">{props.title}</p>
          <p className="language">使用言語：{props.language}</p>
          <p className="comment">{props.comment}</p>
          <div className="git-btn btn">
            <span>
              <a href={props.github} className="github">
                GitHub
              </a>
            </span>
          </div>
          <div className="site-btn btn">
            <span>
              <a href={props.site}>サイトに移動</a>
            </span>
          </div>
          <div className="close-btn btn" onClick={handleClickClose}>
            <span>閉じる</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
