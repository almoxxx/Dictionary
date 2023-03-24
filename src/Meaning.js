import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.definition.partOfSpeech}</h3>
      <p>{props.definition.definition}</p>
      <p>
        <em>{props.definition.example}</em>
      </p>
    </div>
  );
}
