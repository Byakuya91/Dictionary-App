// ToggleThemeSwitch.jsx
import React from "react";
import styles from "../ToggleThemeSwitch/ToggleThemeSwitcher.module.css";

const ToggleThemeSwitch = ({ handleToggleTheme }) => {
  return (
    <div className={styles["toggle-container"]} onClick={handleToggleTheme}>
      <div className={styles["toggle-switch"]}></div>
    </div>
  );
};

export default ToggleThemeSwitch;
