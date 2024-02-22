import React from "react";

// ? styles import
import styles from "../Header/Header.module.css";

// ?Asset imports
import Logo from "../../../Assets/logo.svg";

// ?Component imports
import SearchBar from "../SearchBar/SearchBar";

const Header = ({
  grabWord,
  toggle,
  handleToggleTheme,
  font,
  handleFontChange,
  error,
}) => {
  return (
    <header>
      <div className={styles["header"]}>
        <img src={Logo} alt="Logo" />
        <div className={styles["header-widgets"]}>
          <p>dropdown placeholder text</p>
        </div>
        <div>
          <p>Theme Switcher placeholder</p>
        </div>
      </div>
      <SearchBar
        grabWord={grabWord}
        handleToggleTheme={handleToggleTheme}
        error={error}
      />
    </header>
  );
};

export default Header;
