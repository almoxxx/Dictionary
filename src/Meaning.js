import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.definition.partOfSpeech}</h3>
      <p>
        <strong>Definition: </strong>
        {props.definition.definition}
      </p>
      <p>
        <strong>Example: </strong> <em>{props.definition.example}</em>
      </p>
      <Synonyms synonyms={props.definition.synonyms} />
    </div>
  );
}
