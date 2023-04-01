import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.definition.partOfSpeech}</h3>
      <div className="definition">{props.definition.definition}</div>
      <div className="example">
        <span>"{props.definition.example}"</span>
      </div>
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}
