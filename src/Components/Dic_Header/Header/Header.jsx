import React from "react";

// ? styles import
import styles from "../Header/Header.module.css";

// ?ProjectAsstets imports
// ! IMPORTS NOT WORKING

// ?Component imports
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <p>Header placement text</p>
        </div>
        <div>
          <p>dropdown placeholder text</p>
        </div>
        <div>
          <p>Theme Switcher placeholder</p>
        </div>
      </div>
      <SearchBar />
    </header>
  );
};

export default Header;
