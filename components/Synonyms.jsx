function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    const synonymsText = props.synonyms.join(", ");
    return (
      <div class="text-start">
        <span class="fw-bolder">Synonyms: </span> {synonymsText}
      </div>
    );
  } else {
    return null;
  }
}

export default Synonyms;