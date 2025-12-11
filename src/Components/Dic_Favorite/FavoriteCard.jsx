import React from "react";

// React imports

// third part imports

// CSS imports
import "../Dic_Favorite/favoriteCard.css";

const FavoriteCard = ({ favorites, onRemoveFavorite, OnOpen }) => {
  // TODO:
  // STEP ONE: import favorites Data
  // STEP TWO: Figure out HMTL shape of favoriteCards(DONE)
  // STEP THREE: Hard-code values for the favorites card itself(DONE)
  //   STEP FOUR: Test the favorites card(ONGOING)
  // STEP FIVE: Render out the cards on the favoritesPage
  // STEP SIX: Pass the data into the favorites Card and render it.

  //   ? Data shape
  // // {
  //   word: "augment",
  //   phonetic: "/ɔːɡˈmɛnt/",
  //   partsOfSpeech: "noun",
  //   shortDef: "(grammar) In some Indo-European languages, a prefix e-..."
  // }

  return (
    <div className="favorite-card">
      <article>
        <header>
          <h2 className="word">augment</h2>
          <p className="phonetic">/ɔːɡˈmɛnt/</p>
        </header>

        <p className="pos"> part of speech: noun</p>
        <p className="short-def">
          definition: (grammar) In some Indo-European languages, a prefix e-...
        </p>
      </article>

      <footer className="favorite-card-btns">
        <button onClick={OnOpen}>View</button>
        <button onClick={onRemoveFavorite}>Remove favorite</button>
      </footer>
    </div>
  );
};

export default FavoriteCard;
