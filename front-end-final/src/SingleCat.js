import { Link, useLoaderData } from "react-router-dom";
import catimage from './images/cat.jpg';

export async function getSingleCat( {params} ) {
  const response = await fetch(`http://localhost:3001/animals/cat/${params.cat_id}`);
  return await response.json();
}

export default function SingleCat() {
  const cat = useLoaderData();
  // console.log(cat);

 return (
      <div className='flex-container'>
        <div className='animal-card' key={cat._id}>
        <img src={catimage} alt="Cat"/>
        <h1>{cat.name}</h1>
        <h3>Age: {cat.age} years </h3>
        <h3>Breed: {cat.breed}</h3>
        <p>Description: {cat.description}</p>
        </div>
        {/* FIX BUTTON ON SUBMIT ROUTE TO NEW ADOPTION FORM LINK */}
        <button >
          <h2>Want to adopt {cat.name}? Submit a form here</h2>
          <Link to="/adoptionform"> </Link>
        </button>
      </div>
    
      );
  }
