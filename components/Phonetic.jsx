import Audio from "./Audio";

function Phonetic(props) {
  const { audio, text } = props.phonetics;

  if (audio && text) {
    return (
      <div class="py-2">
          <Audio audioUrl={audio} />
          <span className="px-4">{text}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default Phonetic;