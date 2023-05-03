import {Link, useLoaderData} from 'react-router-dom';
import dogimage from './images/dog.jpg';

export async function fetchDogs() {
    const response = await fetch(`http://localhost:3001/animals/dog`);
    const res_obj = await response.json();
    //console.log(res_obj);
    return res_obj;
  }
  
  export default function Dogs() {
    var dogs = useLoaderData();
    //console.log("Logging", dogs);
  
    return (
      <>
      <div className="animal-container" key='0'>
        {dogs?.map((dog) => (
            <div className="animal-card" key={dog._id}>
            <img style={{height:400, width:400}} src={dogimage} alt="Dog"/>
            <Link to={`/animals/dog/${dog._id}`}>
              <h1>{dog.name}</h1>
            </Link>
            </div>  
        ))}
        </div>
      </>
    );
  }