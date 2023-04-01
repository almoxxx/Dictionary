import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        <span>Synonyms: </span>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}> {synonym} </li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
