import React from "react";
import FavoriteCard from "../../Components/Dic_Favorite/FavoriteCard";

const FavoritesPage = ({ favorites, onRemoveFavorite }) => {
  const safeFavorites = favorites || []; // temporary stub

  // Temporary dummy data JUST for layout & styling
  const dummyFavorite = {
    word: "augment",
    phonetic: "/ɔːɡˈmɛnt/",
    partsOfSpeech: "noun",
    shortDef:
      "(grammar) In some Indo-European languages, a prefix e- (a- in Sanskrit) indicating a past tense of a verb.",
  };
  console.log("dummy word", dummyFavorite.word);

  // dummy open and close functions
  const handleDummyOpen = () => {
    console.log("Open:", dummyFavorite.word);
  };

  const handleDummyRemove = () => {
    console.log("Remove:", dummyFavorite.word);
  };

  return (
    <div className="container">
      <h2>Your favorite words</h2>

      <FavoriteCard
        favorite={dummyFavorite}
        onRemoveFavorite={handleDummyRemove}
        OnOpen={handleDummyOpen}
      />

      {safeFavorites.length === 0 ? (
        <p>No favorites yet. Search a word and add it to see it here.</p>
      ) : (
        <ul>
          {safeFavorites.map((word) => (
            <li key={word}>
              {word}
              <button onClick={() => onRemoveFavorite(word)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
