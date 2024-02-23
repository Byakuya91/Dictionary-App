// ?React imports
import React from "react";

// ?styles imports
import styles from "../ToggleThemeSwitch/ToggleThemeSwitcher.module.css";

const ToggleThemeSwitch = ({ toggle, handleToggleTheme }) => {
  // SUB-STEPS
  // 1) pass props down(DONE)
  // 2) Determine the theme based on the props(DONE)
  // 3) determine the Background color based on the props(DONE)

  const theme = toggle ? "" : "toggle";
  const bgClr = toggle ? "" : "dark";

  return (
    <div
      className={`${styles[bgClr]} 
    ${styles["toggle-container"]}`}
      onClick={handleToggleTheme}
    >
      <div className={`${styles[theme]} ${styles["toggle-switch"]}`}></div>
    </div>
  );
};

export default ToggleThemeSwitch;
