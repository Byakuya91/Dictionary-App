import React from 'react';
import DefinitionItems from './DefinitionsItems/DefinitionsItems';
import { v4 as uuidv4 } from 'uuid';

// Definitions component that receives 'meaning' object as props
const Definitions = ({ meaning }) => {
    // Map each definition in 'meaning.definitions' to DefinitionItems components
    const word_definitions = meaning.definitions.map(def => (
        <DefinitionItems key={uuidv4()} definitions={def} />
    ));

    // Map each synonym in 'meaning.synonyms' to paragraph elements
    const synonyms = meaning.synonyms.map(syn => (
        <p key={uuidv4()}>{syn}</p>
    ));

    // Determine if synonym header should be displayed based on presence of synonyms
    let displaySynonymHeader = synonyms.length > 0;

    // Render the Definitions component
    return (
        <div>
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

// Export the Definitions component for use elsewhere in the application
export default Definitions;
