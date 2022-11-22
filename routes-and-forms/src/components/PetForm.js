import React, { useState } from 'react';

const PetForm = () => {
  const [name, setName] = useState('');
  const [,setSubmitted] = useState(false);
  const [age, setAge] = useState('');
  const [colours, setColours] = useState([]);

  


  

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        
        
          <label>Pet's Name:<input type="text" value={name} onChange={(e) => { setName(e.target.value); setSubmitted(false) }} /></label>
          <label>Pet's Age:<input type="text" value={age} onChange={(e) => { setAge(e.target.value); setSubmitted(false) }} /></label>
          <label>Pet's colours:<input type="text" value={colours} onChange={(e) => { setColours(e.target.value); setSubmitted(false) }} /></label>

       
      
        <input type="submit" value="Submit" id="submit-button"/>
      </form>
      <div id="results">
        <h3>Results</h3>
            Name: {name}<br />
      </div>
    </div>
  );
}

export default PetForm;