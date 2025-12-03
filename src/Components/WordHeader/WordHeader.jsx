// src/Components/Word/WordHeader.jsx
import React from "react";
import "./WordHeader.css";
import PlayIcon from "../../assets/icon-play.svg";
import { HeartIcon } from "@heroicons/react/16/solid";
import { useOutletContext } from "react-router-dom";

const WordHeader = ({ word, phonetics, partsOfSpeech, shortDef }) => {
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

  // console tests word header props(SUCCESS)

  // console.log("phonetics are:", phonetics);
  // console.log("parts of speech are:", partsOfSpeech);
  // console.log("definitions are:", shortDef);

  const { favorites, addFavorite, removeFavorite, isFavorite, setFavorites } =
    useOutletContext();

  return (
    <>
      <div className="word-header">
        <h1>{word}</h1>
        <p className="phonetic-text">{phoneticText}</p>
        {phoneticsWithAudio.audio && (
          <button
            onClick={playAudio}
            className="play-button"
            aria-label="Play audio button"
          >
            <img src={PlayIcon} alt="Play audio icon" className="play-icon" />
          </button>
        )}
      </div>
      {/* <HeartIcon className="heart-icon size-6" /> */}
    </>
  );
};

export default WordHeader;
