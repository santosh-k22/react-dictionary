import { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results"
import Recent from "./Recent";
import { BsSearch } from "react-icons/bs";

function getRecent() {
  const data = JSON.parse(localStorage.getItem("recent"));
  if (!data) 
      return [];
  return data;
};

function Dictionary(props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState();
    const [loaded, setLoaded] = useState(false);
    const [exist, setExist] = useState(true);
    const [recent, setRecent] = useState(getRecent);
  
    async function search() {
      try {
          const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`);
          handleDictionaryResponse(response);
      } catch (error) {
          console.log(error);
          setExist(false);
      }
    }

    function handleDictionaryResponse(response) {
      setExist(true);
      setResults(response.data[0]);
      addRecent(response.data[0].word);
    }
  
    function handleKeywordChange(event) {
      setKeyword(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      search();
    }

    function addRecent(keyword) {
      const updatedRecent = [
          ...recent,
          {
            id: crypto.randomUUID(),
            keyword: keyword,
          },
        ];
      setRecent(updatedRecent);
    };

    function clearRecent() {
      localStorage.clear();
      setRecent([]);
      // console.log("clear");
    }

    useEffect(() => {
      search();
    }, []);
  
    useEffect(() => {
      if (loaded) {
        search();
      }
    }, [loaded]);
  
    useEffect(() => {
      setLoaded(true);
    }, []);

    useEffect(() => {
      localStorage.setItem("recent", JSON.stringify(recent));
    }, [recent]);

    return (
      <>
        <div class="container text-center">
        <div class="row">
          <div class="col-1 col-md-2">
          </div>
          <div class="col-10 col-md-8">
          {loaded ? (
            <div>
              <form>
                <div class="mb-3">
                  <div class="card text-center p-3 my-4 shadow-sm rounded">
                  <div class="card-header fw-semibold fs-4">
                    <label for="keyword" class="form-label text-center pt-2"><h2>Search your word here</h2></label>
                  </div>
                  <div class="card-body pb-0">
                    <input type="text" class="form-control form-control-lg text-center mb-3" id="keyword" onChange={handleKeywordChange} placeholder={props.defaultKeyword} />
                    <button type="submit" class="btn btn-primary mb-2" onClick={handleSubmit}><span class="fw-semibold pe-2 fs-5">Search</span><BsSearch className="fs-4 pb-1"/></button>
                  </div>
                  </div>
                </div>
              </form>

            </div>
          ) : (
            "Searching for your query..."
          )}
          {!exist && (<div class="alert alert-danger alert-dismissible fade show" role="alert">
              The word you searched does not exist! Please try another one.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>)}
          {results && <Results results={results} />}
          {recent && <Recent recent={recent} clearRecent={clearRecent}/>}
          </div>
          <div class="col-1 col-md-2">
          </div>
        </div>
      </div>
      </>  
      );
  }

export default Dictionary;