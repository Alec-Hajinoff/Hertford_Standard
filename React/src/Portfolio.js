import React, { useState } from "react";
import "./Portfolio.css";
import LovedayAuto from "./PortfolioProjects/LovedayAuto";
import TrainingApi from "./PortfolioProjects/TrainingApi";

function Portfolio() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="portfolio-hero-container container">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <section className="hero">
            <h2 className="portfolio-hero-title">
              A practical overview of recent work
            </h2>
          </section>
        </div>
      </div>

      {currentPage === 0 ? <LovedayAuto /> : <TrainingApi />}

      <div className="row justify-content-center portfolio-pagination-nav">
        <div className="col-12 col-lg-9 d-flex justify-content-between align-items-center">
          {currentPage === 0 ? (
            <>
              <span className="portfolio-pagination-hidden">
                &larr; TrainingApi
              </span>
              <button
                type="button"
                className="portfolio-pagination-link"
                onClick={() => setCurrentPage(1)}
              >
                Loveday Auto Repairs &rarr;
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="portfolio-pagination-link"
                onClick={() => setCurrentPage(0)}
              >
                &larr; TrainingApi
              </button>
              <span className="portfolio-pagination-hidden">
                Loveday Auto Repairs &rarr;
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
