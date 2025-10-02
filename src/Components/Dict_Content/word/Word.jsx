// Import React and other necessary libraries
import React from "react";
import { v4 as uuidv4 } from "uuid";
import Definitions from "../Definitions/Definitions";

// Placeholder for future imports and CSS modules
// import Definition from '../Definition/Definition';
// import { ReactComponent as NewWindowIcon } from '../../assets/icon-new-window.svg';
// import { ReactComponent as PlayIcon } from '../../../Assets/icon-play.svg';
// import styles from '../Word/Word.module.css';

const Word = ({ wordData }) => {
  // Word variables
  const single_Word = wordData[0];
  const phoneticsArray = single_Word.phonetics;

  //? Map each 'meaning' in 'single_Word.meanings' to the Definitions component
  const definition = single_Word.meanings.map((meaning) => {
    return <Definitions key={uuidv4()} meaning={meaning} />;
  });

  //
  // console.log(" Meanings:", definition);

  // ? Gaining access to phonetics array

  // console.log("the phoneticsArray is", phoneticsArray);

  // ?Finding the meaning within the words
  // console.log("First meaning:", single_Word.meanings[0]);
  // console.log("First definition:", single_Word.meanings[0].definitions[0]);
  // console.log("second definition:", single_Word.meanings[0].definitions[1]);

  // ? Finding the source URLs
  // console.log("Source URLs:", single_Word.sourceUrls);

  //  add audio player

  const phoneticsWithAudio = phoneticsArray.find(
    (phonetic) => phonetic.audio !== ""
  );
  // console.log("Audio URL:", phoneticsWithAudio?.audio);

  // console.log("phoneticsArray:", phoneticsArray);
  // console.log("Is it an array?", Array.isArray(phoneticsArray));

  // function to play audio
  const playAudio = () => {
    const audio = new Audio(phoneticsWithAudio?.audio);
    audio.play();
  };

  return (
    <section>
      <div>
        <h1>{single_Word.word}</h1>
        <button onClick={playAudio}>Play</button>
        <p>{phoneticsArray[1]?.text}</p>
        <div>{definition}</div>
      </div>
      <div>
        <h3>Source</h3>
        <a
          href={single_Word.sourceUrls[0]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {single_Word.sourceUrls[0]}
        </a>
      </div>
    </section>
  );
};
export default Word;
