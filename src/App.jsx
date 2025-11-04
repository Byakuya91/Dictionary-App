// ? React imports

// ? Component imports
import { useState } from "react";
import Header from "./Components/Dic_Header/Header/Header";
// ? RRD imports
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  // Global theme & font state (shared across all pages)
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState("inter");

  const handleToggleTheme = () => setToggleTheme((prev) => !prev);
  const handleFontChange = (newFont) => setFont(newFont);

  return (
    <main className={`${toggleTheme ? "light" : "dark"} ${font}`}>
      <div className="container">
        <Header
          toggle={toggleTheme}
          handleToggleTheme={handleToggleTheme}
          font={font}
          handleFontChange={handleFontChange}
        />
      </div>

      {/* The Outlet is the placeholder where child pages appear */}
      <Outlet />
    </main>
  );
}

export default App;
