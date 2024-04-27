import React from 'react'
import DefinitionItems from './DefinitionsItems/DefinitionsItems';
import { v4 as uuidv4 } from 'uuid'; 

const Definitions = ({ meaning }) => {
    const word_definitions = meaning.definitions.map(def => (
        <DefinitionItems key={uuidv4()} definitions={def} />
    ));

    const synonyms = meaning.synonyms.map(syn => (
        <p key={uuidv4()}>{syn}</p>
    ));

    let displaySynonymHeader = synonyms.length > 0;

    return (
        <div>
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
        </div>
    );
};

export default Definitions;
