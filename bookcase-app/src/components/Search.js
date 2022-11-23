import React, { useState } from "react";

const Search = (props) => {
const [keyword, setKeyword] = useState("")

    return <div>
        <form >
        <label> Search <input type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)}></input> </label>
            <input type= "submit" value="submit"></input>
      </form>   
      <p style = {{color:"red"}}> 
      <em>{keyword && 'Keywords Typed: ' + keyword} </em>
      </p>
        
    </div>

}

export default Search;