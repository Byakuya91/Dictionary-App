// src/Components/Word/WordHeader.jsx
import React from "react";
// import "./WordHeader.css";

const WordHeader = ({ word, phonetics }) => {
  // Find the first phonetic with audio
  const phoneticsWithAudio =
    phonetics?.find((phonetic) => phonetic.audio) || {};
  const phoneticText =
    phonetics?.find((phonetic) => phonetic.text)?.text ||
    "No phonetics available";

  const playAudio = () => {
    if (phoneticsWithAudio.audio) {
      const audio = new Audio(phoneticsWithAudio.audio);
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    }
  };

  return (
    <div className="word-header">
      <h1>{word}</h1>
      <p className="phonetic-text">{phoneticText}</p>
      {phoneticsWithAudio.audio && (
        <button onClick={playAudio} className="play-button">
          Play Audio
        </button>
      )}
    </div>
  );
};

export default WordHeader;
