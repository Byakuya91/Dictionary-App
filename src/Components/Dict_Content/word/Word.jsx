// KEY imports
import React from "react";
// ! needs to be coded but import necessary 
// import Definition from '../Definition/Definition';
// import { ReactComponent as NewWindowIcon } from '../../assets/icon-new-window.svg';
// import { ReactComponent as PlayIcon } from '../../../Assets/icon-play.svg';



import { v4 as uuidv4 } from 'uuid'; 
import Definitions from "../Definitions/Definitions";

// ! Needs to be coded
// import styles from '../Word/Word.module.css';


//  STEP ONE: get the boilerplate setup(DONE)
 const Word = ({wordData})=>{


    // TODO:
    // 1) Display word and phoentics(DONE)
    // 2) Display definition of the words via a component(ONGOING)

    // STEP TWO: grabbing the word and seeing what is inside of it
    const single_Word = wordData[0];

    // Inside contains the object of the word, including properties like definition, parts of speech etc.
    // console.log("the single word is:", single_Word);

    // STEP THREE: map out the individual definitions on the page

    const definition = single_Word.meanings.map(meaning => {
        return <Definitions key={uuidv4()} meaning={meaning} />;
      });
    

    //  ! Definitions are not showing up, testing the elements

    console.log(" Meanings:", definition);

    return (
        <section>
            <div>
            <div>
          <h1>{single_Word.word}</h1>
          <p>{single_Word.phonetic}</p>
          <p>{definition}</p>
        </div>
        {/* <div>Play Icon placeholder</div> */}
            </div>
        </section>



      );
    };
    
    export default Word;




