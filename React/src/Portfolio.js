import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./Portfolio.css";
import EllasCafe from "./PortfolioProjects/EllasCafe";
import LovedayAuto from "./PortfolioProjects/LovedayAuto";
import TrainingApi from "./PortfolioProjects/TrainingApi";

const PROJECTS = [
  {
    key: "ellas-cafe",
    label: "Ella's Café",
    component: <EllasCafe />,
  },
  {
    key: "loveday-auto",
    label: "Loveday Auto Repairs",
    component: <LovedayAuto />,
  },
  {
    key: "training-api",
    label: "TrainingApi",
    component: <TrainingApi />,
  },
];

function Portfolio() {
  const [searchParams, setSearchParams] = useSearchParams();
  const projectParam = searchParams.get("project");
  const parsedPage = projectParam ? parseInt(projectParam, 10) : 0;
  const currentPage =
    !Number.isNaN(parsedPage) && parsedPage >= 0 && parsedPage < PROJECTS.length
      ? parsedPage
      : 0;

  const handlePageChange = (newPage) => {
    setSearchParams({ project: newPage });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const prevProject = currentPage > 0 ? PROJECTS[currentPage - 1] : null;
  const nextProject =
    currentPage < PROJECTS.length - 1 ? PROJECTS[currentPage + 1] : null;

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

      {PROJECTS[currentPage].component}

      <div className="row justify-content-center portfolio-pagination-nav">
        <div className="col-12 col-lg-9 d-flex justify-content-between align-items-center">
          {prevProject ? (
            <button
              type="button"
              className="portfolio-pagination-link"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              &larr; {prevProject.label}
            </button>
          ) : (
            <span className="portfolio-pagination-hidden">
              &larr; {PROJECTS[0].label}
            </span>
          )}

          {nextProject ? (
            <button
              type="button"
              className="portfolio-pagination-link"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {nextProject.label} &rarr;
            </button>
          ) : (
            <span className="portfolio-pagination-hidden">
              {PROJECTS[PROJECTS.length - 1].label} &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
