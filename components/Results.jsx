import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

function Results(props) {
  if (!props.results) {
    return null;
  }

  const { word, phonetics, meanings } = props.results;

  const phoneticsResult = phonetics.map((phonetic, index) => (
    <div key={index}>
      <Phonetic phonetics={phonetic} />
    </div>
  ));

  const meaningsResult = meanings.map((meaning, index) => (
    <div key={index}>
      <Meaning meanings={meaning} />
    </div>
  ));

  return (
    <>
    {/* <div>
      <h2>{word}</h2>
      {phoneticsResult}
      {meaningsResult}
    </div> */}

    <div class="card text-center p-3 my-4 shadow-sm rounded">
    <div class="card-header fw-bold">
      <h2>{word}</h2>
    </div>
    <div class="card-body pb-0">
      <h5 class="card-title">{phoneticsResult}</h5>
    </div>
    </div>
    {meaningsResult}
    </>
  );
}

export default Results;