import React, { useState } from "react";
import Header from "./Header";
import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Search = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.getValue(props.keyword);
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
