import {Link, useLoaderData} from 'react-router-dom';

export default function Donations() {
  var donations = [];
  donations = useLoaderData();
  console.log("Logging", donations);

  return (
    
    <>
    {donations?.map((donation ) => (
        <div className="flex-container" key={donation._id}>
          <h1>{donation.name}</h1>
          <br>
          <h2>{donation.amount}</h2>
        </div>
      ))}
    </>
  );
}

async function fetchDonationss() {
  const response = await fetch(`http://localhost:3001/donation` );
  const res_obj = await response.json();
  console.log(res_obj);
  return await res_obj;
  
}

export { fetchDonations };
