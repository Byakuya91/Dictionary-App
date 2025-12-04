// src/Components/Word/WordHeader.jsx
import React from "react";
import "./WordHeader.css";
import PlayIcon from "../../assets/icon-play.svg";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/16/solid";
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

  const { favorites, addFavorite, removeFavorite, isFavorite } =
    useOutletContext();

  //? STEPS to wire up favorites button
  // TODO: read favorites context(DONE)
  // TODO2: build favoriteObj using: word, phonetics,partsOfSPeech, shortDef(DONE)
  // TODO3: check if the word is favorite or not(DONE)
  // TODO4: add or remove favorite based on if the word is favorite or not.
  // TODO5: wire up the favorite button to add or remove favorite.

  // TODO2:  build favoriteObj
  const favoriteObj = {
    word,
    phonetic: phoneticText,
    partsOfSpeech,
    shortDef,
  };

  // TODO3: check if the word is favorite or not
  const isFav = isFavorite(word);

  // TODO4: add or remove favorite based on if the word is favorite or not.
  const handleFavorite = () => {
    if (isFav) {
      removeFavorite(favoriteObj);
    } else {
      addFavorite(favoriteObj);
    }
  };

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
      <button onClick={handleFavorite} className="favorite-btn">
        {isFav ? "❤️" : "🤍"}
      </button>
    </>
  );
};

export default WordHeader;
