import {Link, useLoaderData} from 'react-router-dom';
import catimage from './images/cat.jpg';

export async function fetchCats() {
    const response = await fetch(`http://localhost:3001/animals/cat`);
    const res_obj = await response.json();
    // console.log(res_obj);
    return res_obj;
  }
  
  export default function Cats() {
    var cats = useLoaderData();
    // console.log("Logging", cats);
  
    return (
      <>
      <div className="animal-container" key='0'>
        {cats?.map((cat) => (
            <div className="animal-card" key={cat._id}>
            <img src={catimage} alt="Cat"/>
            <Link to={`/animals/cat/${cat._id}`}>
              <h1>{cat.name}</h1>
            </Link>
            </div>  
        ))}
        </div>
      </>
    );
  }