// Header.jsx
import React from "react";
import styles from "../Header/Header.module.css";
import Logo from "../../../assets/logo.svg";
import DarkIcon from "../../../assets/icon-moon.svg";
import ToggleThemeSwitch from "../ToggleThemeSwitch/ToggleThemeSwitch";

const Header = ({ toggle, handleToggleTheme, font, handleFontChange }) => {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.left}>
          <img src={Logo} alt="Logo" />
        </div>

        <div className={styles.center}>
          <h1>Dictionary</h1>
        </div>

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
    </header>
  );
};

export default Header;
