import React from "react";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2>{props.results.word}</h2>
        {props.results.phonetic}
        {props.results.meanings.map(function (definition, index) {
          return (
            <div key={index}>
              <Meaning definition={definition} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
