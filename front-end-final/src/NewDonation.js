import React, { useState } from 'react';

export default function NewDonation() {

    //const [storeName, setStoreName] = useState({name: ''});
    const [formState, setFormState] = useState( {name: '', amount: 0.0});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API with the todo data
    fetch("http://localhost:3001/donation/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: 'cors',
      body: JSON.stringify(formState),
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log('Failed to post new donation');
      });
  };

  return (
    <div className='title-donation'>
      <h1>Help us fund our shelter so more animals can find homes.</h1>
      <h2>We appreciate your donations!</h2>
      <div className="flex-container">
        <div className="">
          <form onSubmit={handleSubmit}>
          <label>
            <h3>Name:</h3>
            <input placeholder="Enter your name" type="text" name="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
            <h3>Amount:</h3>
            <input placeholder="Enter the donation amout" type="text" name="donation-amount" value={formState.amount} onChange={(e) => setFormState({ ...formState, amount: e.target.value })} />
          </label>
          <br />        
          <br />
          <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}