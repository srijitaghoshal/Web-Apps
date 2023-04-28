import { useLoaderData } from "react-router-dom";

export async function getSingleItem( {params} ) {

  //console.log(params);
  const response = await fetch(`http://localhost:3001/stores/${params.store_id}/items/${params.item_id}`);
  return await response.json();
}

export default function SingleItem() {
  const item = useLoaderData();
  console.log(item);

 return (
      <div className='flex-container'>
        <div className='product-card' key={item._id}>
        <h1>{item.name}</h1>
        <h3>Quantity: {item.quantity}</h3>
        <h3>Price: ${item.price}</h3>
        </div>
      </div>
    
      );
  }