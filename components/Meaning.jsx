import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

function Meaning(props) {
  const { partOfSpeech, definitions } = props.meanings;

  const toDisplay = definitions.map(({ definition, example, synonyms, antonyms }, index) => (
    <div key={index}>
      <div class="py-2 text-start"><span class="fw-bolder">Def: </span ><span class="fw-medium">{definition}</span></div>
      {example && <div class="fst-italic fw-light pb-3"><span class="fw-normal">Example: </span >{example}</div>}
      {synonyms && <div><Synonyms synonyms={synonyms} /></div>}
      {antonyms && <div><Antonyms antonyms={antonyms}/></div>}
    </div>
  ));

  return (
    <div class="card text-center p-3 my-4 shadow-sm mb-4 rounded">
    <div class="card-header">
      <h3>{partOfSpeech}</h3>
    </div>
    <div class="card-body pb-0">
      {toDisplay}
    </div>
    </div>
  );
}

export default Meaning;