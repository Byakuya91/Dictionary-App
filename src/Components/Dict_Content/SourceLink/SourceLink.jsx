// src/Components/Word/SourceLink.jsx
import React from "react";
// import "./SourceLink.css";

/*************  ✨ Windsurf Command ⭐  *************/
/*******  def1a877-de6c-4382-9ea0-a4818334ab70  *******/
const SourceLink = ({ sourceUrls }) => {
  if (!sourceUrls || sourceUrls.length === 0) {
    return <div className="no-source">No source available.</div>;
  }

  return (
    <div className="source-container">
      <h3>Source</h3>
      <a
        href={sourceUrls[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="source-link"
      >
        {sourceUrls[0]}
      </a>
    </div>
  );
};

export default SourceLink;
