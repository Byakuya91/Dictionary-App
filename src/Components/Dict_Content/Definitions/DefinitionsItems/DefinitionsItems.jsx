//S1 Define the DefinitionItems component that receives 'definitions' object as props
const DefinitionItems = ({ definitions }) => {
  //S2 Render each definition item within a list element
  return (
    <>
      <li>
        <p>{definitions.definition}</p>
        {definitions.example && (
          //S3 Display example if present, wrapped in quotes
          <p className="example-text">&ldquo;{definitions.example}&rdquo;</p>
        )}
      </li>
    </>
  );
};

//S4 Export the DefinitionItems component
export default DefinitionItems;
