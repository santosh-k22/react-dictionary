function Antonyms(props) {
  if (props.antonyms && props.antonyms.length > 0) {
    const antonymsText = props.antonyms.join(", ");
    return (
      <div>
        <span>Antonyms: </span> {antonymsText}
      </div>
    );
  } else {
    return null;
  }
}

export default Antonyms;