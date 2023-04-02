import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlepictureresponse(response) {
    setPhotos(response.data.photos);
  }
  function Search(event) {
    event.preventDefault();
    let key = "b1d355353afe3oe89t1c624ba0cd84bf";
    let ApiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${key}`;
    axios.get(ApiUrl).then(handleResponse);

    let pictureurl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${key}`;
    axios.get(pictureurl).then(handlepictureresponse);
  }

  return (
    <div className="Dictionary">
      <section>
        <h3>What word do you want to look up?</h3>
        <form onSubmit={Search}>
          <input
            type="search"
            autoFocus={true}
            onChange={HandleKeywordChange}
          />
          <input className="button" type="submit" value="Give me eloquence" />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
