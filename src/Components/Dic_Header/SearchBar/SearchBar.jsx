// ? React imports
import React, { useState } from "react";

// ? Assets import
import SearchIcon from "../../../Assets/icon-search.svg";

// ? Module styles imports
import styles from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ grabWord, handleToggleTheme, error }) => {
  // State variable to store the input value
  const [word, setWord] = useState("");

  // Handler functions

  // Call the API function when clicking search
  const handleWordInput = () => {
    if (word.trim()) {
      grabWord(word);
    }
  };

  // Handle Enter key press
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && word.trim()) {
      grabWord(word);
    }
  };

  // Clear the input when focused
  const handleClearFocus = () => {
    setWord("");
  };

  return (
    <section>
      <div
        className={`${error ? styles["error"] : ""} ${
          handleToggleTheme ? styles["light"] : styles["dark"]
        } ${styles["search-bar"]}`}
      >
        <input
          name="search"
          type="text"
          id="search"
          placeholder="Search for any word..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
          onKeyDown={handleEnterKeyPress}
          onFocus={handleClearFocus}
        />

        <button aria-label="search" onClick={handleWordInput}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>

      {error && (
        <div className={styles["empty_error"]}>
          <p>Whoops can&apos;t be empty...</p>
        </div>
      )}
    </section>
  );
};

export default SearchBar;
