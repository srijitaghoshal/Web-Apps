import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import dogimage from './images/new-dog-adoption.jpg';

export default function NewStore() {

    const [formState, setFormState] = useState( {name: '', age: 0, breed: '', description: ''});

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API with the todo data
    fetch("http://localhost:3001/animals/dog/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(formState),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Failed to post a new dog');
      });
  };

  return (
    <div className="flex-container">
      <div className="">
        <form onSubmit={handleSubmit}>
          <p style={{fontSize:32}} >Help pups find a new home!</p>
          <img style={{height: 400, width: 620}} src={dogimage} alt="Puppy being cared for before adoption"/>
          <h5>Name</h5>
          <input style={{width:620}} placeholder="Enter dog's name" type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
          <br />
          <h5>Age</h5>
          <input style={{width:620}} placeholder="Enter dog's age" type="text" value={formState.age} onChange={(e) => setFormState({ ...formState, age: e.target.value })} />
          <br />
          <h5>Breed</h5>
          <input style={{width:620}} placeholder="Enter dog's breed" type="text" value={formState.breed} onChange={(e) => setFormState({ ...formState, breed: e.target.value })} />
          <br />
          <h5>Description</h5>
          <textarea style={{width:620, font: 'inherit', fontSize: 13, height: 100}} placeholder="Enter a description" type="text" value={formState.description} onChange={(e) => setFormState({ ...formState, description: e.target.value })} />
          <br />
          <br/>  
          <Popup trigger={<button type="submit"> Submit</button>} position="right center">
            <div>Sucessfully submitted! Thank you for helping a dog find a new home</div>
          </Popup>  
        </form>
    </div>
    
    </div>
  );
}