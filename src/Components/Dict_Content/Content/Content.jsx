import React from "react";
// Component imports
import Word from "../Word/Word"

// TODO:IMPORTANT steps
// TODO:1  Figure out the sub-components(DONE)
// TODO:2 Code out the word component(ONGOING)
// TODO:3 Code out the definition component(ONGOING)
// TODO: 4 Code out the definition item component(the component to hold the definition)

const Content = ({wordData}) => {
  return (<div>
    {/* Short-circuit to account if the wordData is null. */}
   {wordData && <Word wordData={wordData} />}
  </div>) 
};

export default Content;
