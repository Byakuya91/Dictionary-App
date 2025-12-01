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
  // 1. Add the favorites state to the App component.(DONE)
  // 2. Pass the favorites state to the FavoritesPage component(ONGOING)
  // 3. Pass the onRemoveFavorite function to the FavoritesPage component

  // ? Core question: how to pass a function to a child component
  // ? More specifically: How should I share the favorites state and CRUD functions from App.jsx to HomePage and FavoritesPage given
  // ? they are rendered through outlet?
  // TODO: STEP ONE: Research React Router Dom's outlet and context sharing through outlet.
  // TODO: STEP TWO: Understand that information and see if it's vaiable.
  // TODO: STEP THREE: Implement a solution to pass favorites state and CRUD functions for favorites.

  // Global theme & font state (shared across all pages)
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState("inter");
  const [favorites, setFavorites] = useState([]);

  const handleToggleTheme = () => setToggleTheme((prev) => !prev);
  const handleFontChange = (newFont) => setFont(newFont);

  // favorites testing
  console.log("the current items inside favorites is: ", favorites);

  // ? Functions for FavoritesPage.jsx

  function addFavorite(favObj) {
    //  If the word already exists
    if (isFavorite(favObj.word)) return;

    // Add the word to the favorites state
    setFavorites((prev) => [...prev, favObj]);
  }

  function isFavorite(word) {
    // loop through the favorites and return true if  favorite's, word  equals the given word, false other wise.
    return favorites.some((fWord) => fWord.word === word);
  }

  function removeFavorite(favObj) {
    // Step one: loop through array of favorite obhects
    //  step two: remove those whose favorite.word === word
    //  step three: keep everything else
    // step four: set the new array with the updated favorites state

    //  Steps one to three
    const newFavorites = favorites.filter(
      (fWord) => fWord.word !== favObj.word
    );
    // Step four
    setFavorites(newFavorites);
  }

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

      <Outlet
        context={{ favorites, addFavorite, removeFavorite, isFavorite }}
      />
    </main>
  );
}

export default App;
