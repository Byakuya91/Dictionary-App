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

  // ? Testing the data
  // console.log("the data is:", data);

  // ? SUB STEP TWO: creating function for axios call
  const grabWord = async (input) => {
    // Resetting the errors for input and API fetching
    console.log("Resetting errors");
    setError(false);
    setInputError(false);

    try {
      // If there's NO input
      if (input === "") {
        // Set input error if input is empty
        console.log("Input is empty");
        setInputError(true);
        return;
      }

      // Making the API call
      console.log("Making API call");
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`
      );

      // Converting response data to JSON
      console.log("Converting response data to JSON");
      const responseData = response.data;

      // Log the API response data to the console
      console.log("API response data:", responseData);

      // Setting the fetched data
      console.log("Setting fetched data");
      setData(responseData);
    } catch (error) {
      // If the data is NOT retrieved
      console.error("Error occurred:", error);
      setError(true);
    }
  };

  // ?SUB-STEP THREE: Helper functions

  // ? dark and light mode function
  const handleToggleTheme = () => {
    // ! Console log to test
    console.log("Toggle Test");
    // Flipping toggle boolean
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
    <main className={`${toggleTheme ? 'light' : 'dark'} ${font}`}>

      <div className="container">
        <Header
          grabWord={grabWord}
          toggle={toggleTheme}
          handleToggleTheme={handleToggleTheme}
          font={font}
          handleFontChange={handleFontChange}
          error={inputError}
        />
      </div>
      < Content
       wordData={data}
      />
      {/* {error && <ErrorView />} */}
      {/* Render Content component and pass necessary props */}
      {/* {!error && data && <Content wordData={data} />} */}
    </main>
  );
}

export default App;
