import React from "react";
import Portfolio1 from "../image/portfolio1.png";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const portfolios = [
    {
      image: Portfolio1,
      title: "Toma Morino's Portfolio",
      language: "HTML/CSS, React",
      comment: "はじめてReactを用いたサイト",
    },
    {
      image: Portfolio1,
      title: "テキストテキスト",
      language: "HTML",
      comment: "はじめてReactを用いたサイト",
    },
    {
      image: Portfolio1,
      title: "テキストテキスト",
      language: "HTML",
      comment: "はじめてReactを用いたサイト",
    },
  ];

  return (
    <div>
      <div className="portfolio">
        <div className="wrapper">
          <h2 className="section-ttl __portfolio">製作実績</h2>

          <ul>
            {portfolios.map((portfolio, index) => {
              return (
                <PortfolioItem
                  image={portfolio.image}
                  title={portfolio.title}
                  language={portfolio.language}
                  comment={portfolio.comment}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
