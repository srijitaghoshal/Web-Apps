import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom'

export async function getSingleStore( {params} ) {

  //console.log(params);
  const response = await fetch(`http://localhost:3001/stores/${params.store_id}`);
  return await response.json();
}

export default function SingleStore() {
  const store = useLoaderData();
  console.log(store);

 return (
      <div className='flex-container'>
        <div className='card' key={store._id}>
        <h1>{store.name}</h1>
        <Link to={`/stores/${store._id}/items/new`}>Add new item</Link>
        
        {store.items.map(item => (
        <div className='product-card' key={item._id}>
          <Link to={`items/${item._id}`}><h1>{item.name}</h1></Link>
          <h3>Quantity: {item.quantity}</h3>
          <h3>Price: ${item.price}</h3>
        </div>
        ))}
        </div>
      </div>
    
      );
  }
