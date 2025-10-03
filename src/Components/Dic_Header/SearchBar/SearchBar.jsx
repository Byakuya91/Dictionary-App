// ? React imports
import React, { useState } from "react";

// ? Assets import
import SearchIcon from "../../../Assets/icon-search.svg";

// ? Module styles imports
import styles from "../SearchBar/SearchBar.module.css";

const SearchBar = ({ grabWord, onInputError, handleToggleTheme, error }) => {
  // State variables
  const [word, setWord] = useState("");

  // Handler functions

  // Call the API function when clicking search
  const handleWordInput = () => {
    const validation = validateInput(word);

    if (!validation.isValid) {
      onInputError(validation.error); // Show error message
      return; // Stop here, don't call API
    }

    // If valid, make API call
    grabWord(word.trim());
  };

  const validateInput = (input) => {
    const trimmedInput = input.trim();

    // check if empty
    if (trimmedInput === "") {
      return { isValid: false, error: "Whoops, can't be empty..." };
    }

    // Check if contains only letters (and optional spaces/hyphens for words like "self-esteem")
    const letterPattern = /^[a-zA-Z\s-]+$/;
    if (!letterPattern.test(trimmedInput)) {
      return { isValid: false, error: "Please enter valid letters only" };
    }

    return { isValid: true, error: "" };
  };

  // Handle Enter key press
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && word.trim()) {
      handleWordInput();
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
    </section>
  );
};

export default SearchBar;
