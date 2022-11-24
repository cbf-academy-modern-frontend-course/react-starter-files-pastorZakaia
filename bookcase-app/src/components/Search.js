import React, { useState } from "react";

const Search = (props) => {
const [keyword, setKeyword] = useState("")
const handleSubmit = (event) => {
    event.preventDefault();
    props.findBooks(props.keyword);
    console.log(props.keyword)
    props.getValue(keyword)
};
    return (<div>
        <form onSubmit = {handleSubmit}>
        <label> Search <input type="text" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}></input> </label>
            <input type= "submit" value="submit"></input>
         </form>   
        <p style = {{color:"red"}}> 
        <em>{keyword && 'Keywords Typed: ' + keyword} </em>
      </p>
        
    </div>)

}

export default Search;