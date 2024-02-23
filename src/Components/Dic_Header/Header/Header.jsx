import React from "react";

// ? styles import
import styles from "../Header/Header.module.css";

// ?Asset imports
import Logo from "../../../Assets/logo.svg";
import DarkIcon from "../../../Assets/icon-moon.svg";
// import { ReactComponent as DarkIcon } from "../../../Assets/icon-moon.svg";

// ?Component imports
import SearchBar from "../SearchBar/SearchBar";
import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";

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
        <div className={styles["header-divider"]}>
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
      <SearchBar
        grabWord={grabWord}
        handleToggleTheme={handleToggleTheme}
        error={error}
      />
    </header>
  );
};

export default Header;
