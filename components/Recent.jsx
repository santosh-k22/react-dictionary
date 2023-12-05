import { MdDelete } from "react-icons/md";

function Recent({ recent, clearRecent}) {
  
  const renderedRecent = recent.map((item) => {
    return (
      <li key={item.id} class="list-group-item list-group-item-action">{item.keyword}</li>
    );
  });

  return(
    <div class="card text-center p-3 my-4 shadow-sm rounded">
    <div class="card-header fw-semibold fs-4">
      <span class="px-5">Recent Search History</span>
      <button onClick={clearRecent}>
        <MdDelete className="fs-3"/>
      </button>
    </div>
    <div class="card-body pb-0">
      <div class="list-group">
        {renderedRecent}
      </div>
    </div>
    </div>
  );
}

export default Recent;
