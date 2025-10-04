import React from "react";

// ? styles import
import styles from "../Header/Header.module.css";

// ?Asset imports
import Logo from "../../../assets/logo.svg";
import DarkIcon from "../../../assets/icon-moon.svg";

// ?Component imports
import SearchBar from "../SearchBar/SearchBar";
import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";

const Header = ({
  grabWord,
  toggle,
  handleToggleTheme,
  font,
  onInputError,
  handleFontChange,
  error,
}) => {
  return (
    <header>
      <div className={styles.header}>
        {/* Left: Logo */}
        <div className={styles.left}>
          <img src={Logo} alt="Logo" />
        </div>

        {/* Center: dropdown placeholder (later your font selector maybe) */}
        <div className={styles.center}>
          <h1>Dictionary text</h1>
        </div>

        {/* Right: theme toggle + dark icon */}
        <div className={styles.right}>
          <ToggleThemeSwitch
            toggle={toggle}
            handleToggleTheme={handleToggleTheme}
          />
          <img
            src={DarkIcon}
            alt="DarkIcon"
            className={`${toggle ? "" : styles["icon-dark"]} ${
              styles["theme-icon"]
            }`}
          />
        </div>
      </div>

      {/* Search bar sits below header */}
      <SearchBar
        grabWord={grabWord}
        onInputError={onInputError}
        handleToggleTheme={handleToggleTheme}
        error={error}
      />
    </header>
  );
};

export default Header;
