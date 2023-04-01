import React from "react";
import Meaning from "./Meaning.js";
import "./Dictionary.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>
            {props.results.word}{" "}
            <span className="phonetics">{props.results.phonetic}</span>
          </h2>
        </section>
        {props.results.meanings.map(function (definition, index) {
          return (
            <section key={index}>
              <Meaning definition={definition} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
