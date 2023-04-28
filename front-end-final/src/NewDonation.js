import React, { useState } from 'react';

export default function NewDonation() {

    //const [storeName, setStoreName] = useState({name: ''});
    const [formState, setFormState] = useState( {name: '', amount: 0.0});
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a POST request to the API with the todo data
    fetch("http://localhost:3001/donation", {
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
    <div className="flex-container">
//       <div className="">
//         <form onSubmit={handleSubmit}>
//         <label>
//           <h3>Name:</h3>
//           <input placeholder="Enter your name" type="text" name="name" value={storeName.name} onChange={(e) => setStoreName({ ...storeName, name: e.target.value })} />
//         </label>
//         <br />        
//         <br />
//         <button type="submit">Submit</button>
//         </form>
    </div>
    
    </div>
  );
}
