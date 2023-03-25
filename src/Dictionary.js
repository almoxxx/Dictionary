import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }

  function Search(event) {
    event.preventDefault();
    let key = "b1d355353afe3oe89t1c624ba0cd84bf";
    let ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(ApiUrl).then(handleResponse);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" autoFocus={true} onChange={HandleKeywordChange} />
        <input type="submit" value="Give me eloquence" />
      </form>
      <Results results={results} />
    </div>
  );
}
