
// Define the DefinitionItems component that receives 'definitions' object as props
const DefinitionItems = ({ definitions }) => {
    // Render each definition item within a list element
    return (
        <li>
            <p>{definitions.definition}</p>  
            {definitions.example && (
                // Display example if present, wrapped in quotes
                <p className="example-text">&ldquo;{definitions.example}&rdquo;</p>
            )}
        </li>
    );
};

// Export the DefinitionItems component
export default DefinitionItems;
