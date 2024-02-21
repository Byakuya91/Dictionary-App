// ? React imports
import { useState } from "react";
// ? Component imports
import Header from "./Components/Dic_Header/Header/Header";
// ? module imports
import axios from "axios";

// TODO:
// 1) research API and how it works(DONE)
// 2) Implement and test the API(DONE)
// 3) pass down the Async function down to the search bar component.
// 4) Code out helper functions and flesh out CSS sheet.
// 5) Hook up the search bar(after setting it up) and have it make an API

function App() {
  // ? STEP ONE: define state variables

  // ? Storing fetch API data
  const [data, setData] = useState(null);
  // ? Track an error during API data fetching
  const [error, setError] = useState(false);
  // ? Variable to track is there's an input error
  const [inputError, setInputError] = useState(false);
  // ? toggles between 'light' and 'dark' themes
  const [toggleTheme, setToggleTheme] = useState(true);
  // ? stores selected font
  const [font, setFont] = useState("inter");

  // ? STEP TWO: API to dictionary

  // ?SUB STEP ONETesting the dictionary API call(TEST COMPLETED)
  // axios
  //   .get("https://api.dictionaryapi.dev/api/v2/entries/en/augment")
  //   .then((response) => {
  //     console.log("the word is: ", response.data[0]); // Log the response data to the console
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error); // Log any errors to the console
  //   });

  // ? SUB STEP TWO: creating function for axios call
  const grabWord = async () => {
    //  ? resetting the errors for Input and API fetching
    setError(false);
    setInputError(false);

    try {
      // ?If there's NO input
      if (input === "") {
        // ? Set input error if input is empty
        setInputError(true);
        return;
      }

      // ! Making the API call
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      // ? Converting response data to JSON
      const responseData = response.data;

      //  ? setting the fetched data
      setData(responseData);
    } catch (error) {
      // If the data is NOT retrieved
      setError(true);
    }
  };

  // ?SUB-STEP THREE: Helper functions

  // ? dark and light mode function
  const handleToggle = () => {
    // Flipping toggle boolean
    setToggleTheme((prevToggleState) => !prevToggleState);
  };

  // ? font changing
  const handleFontChange = () => {
    setFont(font);
  };

  return (
    <main className="`${toggleTheme ? 'light' : 'dark'} ${font}`">
      <div className="container">
        <Header
          grabWord={grabWord}
          toggle={toggleTheme}
          handleToggle={handleToggle}
          font={font}
          handleFontChange={handleFontChange}
          error={inputError}
        />
      </div>
    </main>
  );
}

export default App;
