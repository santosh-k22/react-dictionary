import { HiOutlineSpeakerWave } from "react-icons/hi2";

function Audio(props) {
  function handleClick() {
    const audioElement = document.createElement('audio');
    audioElement.src = props.audioUrl;
    audioElement.play();
  }

  return (
    <span>
      <button
        data-playing="false"
        role="switch"
        aria-checked="false"
        onClick={handleClick}
      >
        <HiOutlineSpeakerWave className="fs-3"/>
      </button>
    </span>
  );
}

export default Audio;