import {useLoaderData} from 'react-router-dom';
import pawprint from './images/paw-print.jpg';

export default function Donations() {
  var donations = [];
  donations = useLoaderData();
  console.log("Logging", donations);

  return (
    <div className='title-donation' key='0'>
      <h1>Thank you to all our donors!</h1>
      <div className='animal-container' key='1'>
      {donations?.map((donation ) => (
          <div className="animal-card" key={donation._id}>
            <img style={{height:200, width:200}} src={pawprint} alt="Dog"/>
            <h3>Donor: {donation.name}</h3>
            <br/>
            <h3>Amount: ${donation.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetchDonations() {
  const response = await fetch(`http://localhost:3001/donation` );
  const res_obj = await response.json();
  console.log(res_obj);
  return await res_obj;
  
}

export { fetchDonations };