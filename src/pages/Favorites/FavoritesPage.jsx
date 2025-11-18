import React from "react";

const FavoritesPage = ({ favorites, onRemoveFavorite }) => {
  const safeFavorites = favorites || []; // temporary stub

  return (
    <div className="container">
      <h2>Your favorite words</h2>

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
