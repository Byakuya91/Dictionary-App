// ? React imports

// ? Component imports
import { useState } from "react";
import Header from "./Components/Dic_Header/Header/Header";
// ? RRD imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  // ? STEPS FOR FavoritesPage.jsx
  // TODO:
  // 0. Decide on a shape for the favorites state(DONE)
  // 1. Add the favorites state to the App component.(ONGOING)
  // 2. Pass the favorites state to the FavoritesPage component
  // 3. Pass the onRemoveFavorite function to the FavoritesPage component

  // Global theme & font state (shared across all pages)
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState("inter");
  const [favorites, setFavorites] = useState([]);

  const handleToggleTheme = () => setToggleTheme((prev) => !prev);
  const handleFontChange = (newFont) => setFont(newFont);

  // ? Functions for FavoritesPage.jsx

  function addFavorite(word) {
    // ? How do I check for a property in an array of objects?
    //  Answer: Find the object in the array that matches the given word
    if (!favorites.find((f) => f.word === word))
      setFavorites([...favorites, word]);
  }

  function isFavorite(word) {
    // loop through the favorites and return true if  favorite's, word  equals the given word, false other wise.
    return favorites.some((fWord) => fWord.word === word);
  }

  const onRemoveFavorite = (word) =>
    setFavorites(favorites.filter((f) => f !== word));

  return (
    <main className={`${toggleTheme ? "light" : "dark"} ${font}`}>
      <div className="container">
        <Header
          toggle={toggleTheme}
          handleToggleTheme={handleToggleTheme}
          font={font}
          handleFontChange={handleFontChange}
        />
      </div>

      {/* The Outlet is the placeholder where child pages appear */}
      <Outlet />
    </main>
  );
}

export default App;
