import React from "react";
import { v4 as uuidv4 } from "uuid";
import WordHeader from "../../WordHeader/WordHeader";
import MeaningsList from "../../MeaningsList/MeaningsList";
import SourceLink from "../../SourceLink/SourceLink";
import PropTypes from "prop-types";
// import "./Word.css";

const Word = ({ wordData }) => {
  //! Checking if there is word data
  if (!wordData || !Array.isArray(wordData) || wordData.length === 0) {
    return <div className="error">No word data available.</div>;
  }

  const singleWord = wordData[0];

  return (
    <section className="word-container">
      <WordHeader word={singleWord.word} phonetics={singleWord.phonetics} />
      <MeaningsList meanings={singleWord.meanings} />
      <SourceLink sourceUrls={singleWord.sourceUrls} />
    </section>
  );
};

Word.propTypes = {
  wordData: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      phonetics: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string,
          audio: PropTypes.string,
        })
      ),
      meanings: PropTypes.array.isRequired,
      sourceUrls: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

export default Word;
