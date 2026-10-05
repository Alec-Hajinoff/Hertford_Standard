import React from "react";
import "./Portfolio.css";
import LovedayAuto from "./PortfolioProjects/LovedayAuto";
import TrainingApi from "./PortfolioProjects/TrainingApi";

function Portfolio() {
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

      <LovedayAuto />

      <TrainingApi />
    </div>
  );
}

export default Portfolio;
