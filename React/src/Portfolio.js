import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Portfolio.css";
import LovedayAuto from "./PortfolioProjects/LovedayAuto";
import TrainingApi from "./PortfolioProjects/TrainingApi";

function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectParam = searchParams.get("project");
  const currentPage = projectParam ? parseInt(projectParam, 10) : 0;

  const handlePageChange = (newPage) => {
    setSearchParams({ project: newPage });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

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
                &larr; Loveday Auto Repairs
              </span>

              <button
                type="button"
                className="portfolio-pagination-link"
                onClick={() => handlePageChange(1)}
              >
                TrainingApi &rarr;
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="portfolio-pagination-link"
                onClick={() => handlePageChange(0)}
              >
                &larr; Loveday Auto Repairs
              </button>

              <span className="portfolio-pagination-hidden">
                TrainingApi &rarr;
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
