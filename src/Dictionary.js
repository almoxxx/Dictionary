import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState(null);

  function HandleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  return (
    <form onSubmit={Search}>
      <input type="search" autoFocus={true} onChange={HandleKeywordChange} />
      <input type="submit" value="Give me eloquence" />
    </form>
  );
}
