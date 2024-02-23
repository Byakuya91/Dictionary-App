// ? React imports
import React, { useRef } from "react";

// ? Assets import
import SearchIcon from "../../../Assets/icon-search.svg";

const SearchBar = ({ grabWord, HandleToggleTheme, error }) => {
  //TODO:
  // ? 1) Create a ref to hold the typedWord.(DONE)
  // ? 2) Create a function to utilize that ref and call grabWord  props function(ONGOING)
  // ? 3) Create a function to enable the API search when the enter key is pressed based on keycodes

  // STEP ONE: create a ref
  const inputRef = useRef();

  // TEST THE REF(SUCCESSFUL)
  // Log the input value when it changes
  // const handleInputChange = () => {
  //   console.log("Input value:", inputRef.current.value);
  // };

  // STEP TWO: code out helper functions

  // ? calling the API function to showcase
  const handleWordInput = () => {
    // take in the typed word from SearchBar
    const typedWord = inputRef.current.value;

    // Log the typed word to the console
    console.log("Typed word:", typedWord);

    // Call the API function with the typed word
    grabWord(typedWord);
  };

  // ? Creating function to handle when the enter key is pressed

  // Creating function to handle when the enter key is pressed
  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      const enteredWord = inputRef.current.value;
      grabWord(enteredWord); // Call grabWord directly
    }
  };

  return (
    <section>
      <div>
        <input
          name="search"
          type="text"
          id="search"
          placeholder="Search for any word..."
          ref={inputRef}
          // onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
        <button aria-label="search" onClick={handleWordInput}>
          <img src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
