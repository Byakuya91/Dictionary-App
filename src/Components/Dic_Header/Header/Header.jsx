import React from "react";

// ? styles import
import styles from "../Header/Header.module.css";

// ?ProjectAsstets imports
// ! IMPORTS NOT WORKING
// import { ReactComponent as Logo } from "../../../ProjectAssets/logo.svg";
// import { ReactComponent as DarkIcon } from "../../../ProjectAssets/icon-moon.svg";

// ?Component imports
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      <div>
        <Logo className={styles["logo"]} />
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
