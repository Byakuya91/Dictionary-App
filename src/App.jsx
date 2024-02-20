// ? React imports
import { useState } from "react";
// ? Component imports
import Header from "./Components/Dic_Header/Header/Header";
// ? module imports
import axios from "axios";

// TODO:
// 1) research API and how it works(ONGOING)
// 2) Implement and test the API(ONGOING)
// 3) pass down the Async function down to the search bar component.
// 4) Hook up the search bar(after setting it up) and have it make an API

function App() {
  // ? STEP ONE: define state variables

  // ? Storing fetch API data
  const [data, setData] = useState(null);
  // ? Track an error during API data fetching
  const [error, setError] = useState(false);
  // ? Variable to track is there's an input error
  const [inputerror, setInputError] = useState(false);
  // ? toggles between 'light' and 'dark' themes
  const [toggleTheme, setToggleTheme] = useState(true);
  // ? stores selected font
  const [font, setFont] = useState("inter");

  // ? STEP TWO: API to dictionary
  // Testing the dictionary API call
  axios
    .get("https://api.dictionaryapi.dev/api/v2/entries/en/augment")
    .then((response) => {
      console.log("the word is: ", response.data[0]); // Log the response data to the console
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // Log any errors to the console
    });

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
