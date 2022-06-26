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
      github: "https://github.com/Touma-M08/portfolio",
      site: "",
    },
    {
      image: Portfolio1,
      title: "テキストテキスト",
      language: "HTML",
      comment: "はじめてReactを用いたサイト",
      github: "",
      site: "",
    },
    {
      image: Portfolio1,
      title: "テキストテキスト",
      language: "HTML",
      comment: "はじめてReactを用いたサイト",
      github: "",
      site: "",
    },
  ];

  return (
    <div className="pd">
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
                  github={portfolio.github}
                  site={portfolio.site}
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
