import React from "react";
// COMMENT: Imported the TrainingApi component from the new PortfolioProjects folder
import TrainingApi from "./PortfolioProjects/TrainingApi";

function Portfolio() {
  return (
    // COMMENT: Replaced the inline project markup with the TrainingApi component call
    <TrainingApi />
  );
}

export default Portfolio;