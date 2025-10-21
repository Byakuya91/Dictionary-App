// ? React imports
import { useState } from "react";
// ? Component imports
import Header from "./Components/Dic_Header/Header/Header";
// ? module imports
import axios from "axios";
import Content from "./Components/Dict_Content/Content/Content";
import ErrorMessage from "./Components/Dict_Content/ErrorMessage/ErrorMessage";

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
  const [isLoading, setIsLoading] = useState(false);

  //? Functions

  // API call

  // ? Testing the spinner with API
  const FAKE_DELAY = true;

  const grabWord = async (input) => {
    setErrorMessage("");
    setData(null);
    setIsLoading(true);
    try {
      //  ! Testing the spinner with API
      if (FAKE_DELAY) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      }

      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );
      setData(response.data);
    } catch (error) {
      console.error("API Error:", error);
      console.log("The error response is:", error.response);

      //? Error messages for different types of errors
      if (error.response && error.response.status === 404) {
        setErrorMessage(
          "Sorry, we couldn't find that word. Please check your spelling and try again."
        );
      } else if (error.request && !error.response) {
        setErrorMessage(
          "Unable to reach the dictionary server. Please check your connection or try again later."
        );
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      // ? setting the loading bar to false when the API call is done
      setIsLoading(false);
    }
  };

  const clearError = () => setErrorMessage("");
  // In the return:

  // ? Handlers

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

      {isLoading && <div>Loading...</div>}
      <ErrorMessage message={errorMessage} clearError={clearError} />
      {!errorMessage && data && <Content wordData={data} />}
    </main>
  );
}

export default App;
