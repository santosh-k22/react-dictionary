function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    const synonymsText = props.synonyms.join(", ");
    return (
      <div>
        <span>Synonyms: </span> {synonymsText}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;