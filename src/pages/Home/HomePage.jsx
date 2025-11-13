// HomePage.jsx
import React, { useState } from "react";
import Content from "../../Components/Dict_Content/Content/Content";
import ErrorMessage from "../../Components/Dict_Content/ErrorMessage/ErrorMessage";
import SearchBar from "../../Components/Dic_Header/SearchBar/SearchBar"; // adjust path if needed
import axios from "axios";

const HomePage = () => {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const FAKE_DELAY = false;

  const grabWord = async (input) => {
    setErrorMessage("");
    setData(null);
    setIsLoading(true);
    try {
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
      setIsLoading(false);
    }
  };

  const clearError = () => setErrorMessage("");

  const handleInputError = (message) => {
    setErrorMessage(message);
    setData(null);
  };

  return (
    <>
      <div className="container">
        <SearchBar
          grabWord={grabWord}
          onInputError={handleInputError}
          error={errorMessage}
        />

        {isLoading && (
          <progress value="0" max="100">
            Loading...
          </progress>
        )}

        <ErrorMessage message={errorMessage} clearError={clearError} />
        {!errorMessage && data && <Content wordData={data} />}
      </div>
    </>
  );
};

export default HomePage;
