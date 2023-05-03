import {Link, useLoaderData} from 'react-router-dom';

export default function Stores() {
  var stores = [];
  stores = useLoaderData();
  console.log("Logging", stores);

  return (
    
    <>
    {stores?.map((store ) => (
        <div className="flex-container" key={store._id}>
          <Link to={`${store._id}`}><h1>{store.name}</h1></Link>
        </div>
      ))}
    </>
  );
}

async function fetchStores() {
  const response = await fetch(`http://localhost:3001/stores` );
  const res_obj = await response.json();
  console.log(res_obj);
  return await res_obj;
  
}

export { fetchStores };