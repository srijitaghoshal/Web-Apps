import { Link, useLoaderData } from "react-router-dom";
import dogimage from './images/dog.jpg';

export async function getSingleDog( {params} ) {

  //console.log(params);
  const response = await fetch(`http://localhost:3001/animals/dog/${params.dog_id}`);
  return await response.json();
}

export default function SingleDog() {
  const dog = useLoaderData();
  //console.log(dog);

 return (
       <div className='flex-container'>
        <div className='animal-card' key={dog._id}>
        <img style={{height:400, width:400}} src={dogimage} alt="Cat"/>
        <h1>{dog.name}</h1>
        <h3>Age: {dog.age} years </h3>
        <h3>Breed: {dog.breed}</h3>
        <p>Description: {dog.description}</p>
        </div>
        {/* FIX BUTTON ON SUBMIT ROUTE TO NEW ADOPTION FORM LINK */}
        <button >
          <h2>Want to adopt {dog.name}? Submit a form here</h2>
          <Link to="/adoptionform"> </Link>
        </button>
      </div>
    
      );
  }
