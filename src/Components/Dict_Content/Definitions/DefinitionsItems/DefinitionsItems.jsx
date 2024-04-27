import React from 'react';

const DefinitionItems = ({ definitions }) => {
    return (
        <li>
            <p>{definitions.definition}</p>
            {definitions.example && (
                <p className="example-text">&ldquo;{definitions.example}&rdquo;</p>
            )}
        </li>
    );
};

export default DefinitionItems;
