import {useLoaderData } from "react-router-dom";
import catimage from './images/cat.jpg';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export async function getSingleCat( {params} ) {
  const response = await fetch(`http://localhost:3001/animals/cat/${params.cat_id}`);
  return await response.json();
}

export default function SingleCat() {
  const cat = useLoaderData();
  // console.log(cat);

 return (
    <>
      <div className='flex-container'>
        <div className='animal-card' key={cat._id}>
        <img src={catimage} alt="Cat"/>
        <h1>{cat.name}</h1>
        <h3>Age: {cat.age} years </h3>
        <h3>Breed: {cat.breed}</h3>
        <p>Description: {cat.description}</p>
        </div>  
      </div>
      <div className='pop-up'>
        <Popup  trigger={<button ><h2>Want to adopt {cat.name}? Submit here to apply</h2></button>} position="right center">
              <div>Sucessfully submitted! Thank you for helping a cat find a new home</div>
        </Popup> 
      </div> 
    </>
    
    );
  }
