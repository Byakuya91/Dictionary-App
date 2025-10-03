// src/Components/Word/MeaningsList.jsx
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Definitions from "../Definitions/Definitions";
// import "./MeaningsList.css";

const MeaningsList = ({ meanings }) => {
  if (!meanings || meanings.length === 0) {
    return <div className="no-meanings">No meanings available.</div>;
  }

  return (
    <div className="meanings-list">
      {meanings.map((meaning) => (
        <Definitions key={uuidv4()} meaning={meaning} />
      ))}
    </div>
  );
};

export default MeaningsList;
