import React, { useState } from "react";

function Search({onChange, text}) {

  function handleChange(e) {
    onChange(e.target.value)
  }
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} value={text} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
