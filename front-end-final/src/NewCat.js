import React, { useState } from 'react';

export default function NewStore() {

    const [formState, setFormState] = useState( {name: '', age: 0, breed: '', description: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API with the todo data
    fetch("http://localhost:3001/cats/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(formState),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Failed to post new todo');
      });
  };

  return (
    <div className="flex-container">
      <div className="">
        <form onSubmit={handleSubmit}>
        <label>
          <h3>Name:</h3>
          <input placeholder="Enter store name" type="text" name="name" value={storeName.name} onChange={(e) => setStoreName({ ...storeName, name: e.target.value })} />
        </label>
        <br />        
        <br />
        <button type="submit">Submit</button>
        </form>
    </div>
    
    </div>
  );
}