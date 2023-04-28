import { useState } from "react";
//overall form that handles where new todo can be added
const NewItem = (props) => {
  //form manages its state
  const [formState, setFormState] = useState( {name: '', quantity: 0, price: 0});
  let path = window.location.pathname;
  console.log(path);
  //obtains store_id from url
  let store_id = path.substring(8, 44);
  console.log(store_id)


  async function handleSubmit(name, quantity, price) { 
    let item = formState;
    item.store_id = store_id;

    const res = await fetch(`http://localhost:3001/stores/${store_id}/items`, {
        method: "POST",
        body: JSON.stringify(item),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(res);
  };

  return (
    //fires fetch call on submit in App
    <form className="form-div" onSubmit={(event) => {
      event.preventDefault();
      handleSubmit({ name: formState.name, quantity: formState.quantity, price: formState.price});
      setFormState({ name: '' , quantity: 0, price: 0}); 
    }}>
      <p>Description:</p>
      <h5>Item Name</h5>
      <input placeholder="Enter item name" type="text" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} />
      <br />
      <h5>Quantity</h5>
      <input placeholder="Enter quantity" type="text" value={formState.quantity} onChange={(e) => setFormState({ ...formState, quantity: e.target.value })} />
      <br />
      <h5>Price</h5>
      <input placeholder="Enter price" type="text" value={formState.price} onChange={(e) => setFormState({ ...formState, price: e.target.value })} />
      <br />
      <button type="submit">Add</button>
    </form>
  )
}

export default NewItem;