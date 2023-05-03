import {useLoaderData } from "react-router-dom";
import dogimage from './images/dog.jpg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export async function getSingleDog( {params} ) {

  //console.log(params);
  const response = await fetch(`http://localhost:3001/animals/dog/${params.dog_id}`);
  return await response.json();
}

export default function SingleDog() {
  const dog = useLoaderData();
  //console.log(dog);

 return (
      <>
        <div className='flex-container'>
          <div className='animal-card' key={dog._id}>
          <img style={{height:400, width:400}} src={dogimage} alt="Cat"/>
          <h1>{dog.name}</h1>
          <h3>Age: {dog.age} years </h3>
          <h3>Breed: {dog.breed}</h3>
          <p>Description: {dog.description}</p>
          </div>
        </div>
        <div className='pop-up'>
        <Popup  trigger={<button ><h2>Want to adopt {dog.name}? Submit here to apply</h2></button>} position="right center">
              <div>Sucessfully submitted! Thank you for helping a dog find a new home</div>
        </Popup> 
      </div> 
      </>
      );
  }
