import React from "react";
import DefinitionItems from "./DefinitionsItems/DefinitionsItems";
import { v4 as uuidv4 } from "uuid";

// Definitions component that receives 'meaning' object as props
const Definitions = ({ meaning }) => {
  //S1 Map each definition in 'meaning.definitions' to DefinitionItems components
  const word_definitions = meaning.definitions.map((def) => (
    <DefinitionItems key={uuidv4()} definitions={def} />
  ));

  //S2 Map each synonym in 'meaning.synonyms' to paragraph elements
  const synonyms = meaning.synonyms.map((syn) => <p key={uuidv4()}>{syn}</p>);

  //S3 Determine if synonym header should be displayed based on presence of synonyms
  let displaySynonymHeader = synonyms.length > 0;

  //S4 Render the Definitions component
  return (
    <div>
      <h3> Parts of speech:{meaning.partOfSpeech}</h3>
      <h3>Meaning</h3>
      <ul>{word_definitions}</ul>
      {displaySynonymHeader && (
        <div>
          <h3>Synonyms</h3>
          {synonyms}
        </div>
      )}
    </div>
  );
};

export default Definitions;
