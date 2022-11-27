import React, { useState } from "react";

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
    props.getValue(keyword);
    console.log(props.keyword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Search{" "}
          <input
            type="text"
            value={props.keyword}
            onChange={(e) => props.setKeyword(e.target.value)}
          ></input>{" "}
        </label>
        <input type="submit" value="submit"></input>
      </form>
      <p style={{ color: "red" }}>
        <em>{props.keyword && "Keywords Typed: " + props.keyword} </em>
      </p>
    </div>
  );
};

export default Search;
