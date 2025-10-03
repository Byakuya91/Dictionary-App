// ? React imports
import { useState } from "react";
// ? Component imports
import Header from "./Components/Dic_Header/Header/Header";
// ? module imports
import axios from "axios";
import Content from "./Components/Dict_Content/Content/Content";

// TODO:
// ! SearchBar
// 1) research API and how it works(DONE)
// 2) Implement and test the API(DONE)
// 3) pass down the Async function down to the search bar component(DONE).
// 4) Code out helper functions and flesh out CSS sheet(DONE)
// 5) Hook up the search bar(after setting it up) and have it make an API(DONE)

// ! Toggle theme switcher
// 1) Setup the Toggle theme component(DONE)
// 2) Get the props passed down and hook up the functions(DONE)
// 3) Get the CSS sheet done(DONE)

function App() {
  //? State variables

  const [data, setData] = useState(null);
  // const [error, setError] = useState(false);
  // const [inputError, setInputError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [toggleTheme, setToggleTheme] = useState(true);
  const [font, setFont] = useState("inter");

  const grabWord = async (input) => {
    console.log("Making API call for:", input);
    setErrorMessage("");
    setData(null);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setData(response.data);
    } catch (error) {
      console.error("API Error:", error);
      setErrorMessage(
        `The word you searched for could not be found. Please try again.`
      );
    }
  };

  // Handlers

  const handleInputError = (message) => {
    setErrorMessage(message);
    setData(null); // Clear any previous data
  };

  const handleToggleTheme = () => {
    // ! Console log to test
    console.log("Toggle Test");
    setToggleTheme((prevToggleState) => !prevToggleState);
  };

  // ? font changing
  // const handleFontChange = () => {
  //   setFont(font);
  // };

  const handleFontChange = (newFont) => {
    setFont(newFont);
  };

  return (
    <main className={`${toggleTheme ? "light" : "dark"} ${font}`}>
      <div className="container">
        <Header
          grabWord={grabWord}
          onInputError={handleInputError}
          toggle={toggleTheme}
          handleToggleTheme={handleToggleTheme}
          font={font}
          handleFontChange={handleFontChange}
        />
      </div>

      {errorMessage && (
        <div className="error-container">
          <p className="error-emoji">😕</p>
          <p className="error-message">{errorMessage}</p>
        </div>
      )}

      {!errorMessage && data && <Content wordData={data} />}
    </main>
  );
}

export default App;
