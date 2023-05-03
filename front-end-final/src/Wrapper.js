import { Link, Outlet } from 'react-router-dom';
import pawprint from './images/paw-print.jpg';

export default function Wrapper() {
  return (
    <>
    <link rel="stylesheet" href="style.css" />
      <header>
        <div className='top-link'>
          <img style={{height: 50, width: 50, margin: 20}} src={pawprint} alt="Pawprint Logo"/>
          <Link className='nav-link' to="/animals/cat"><h2>View All Cats</h2></Link>
          <Link className='nav-link' to="/animals/dog"><h2>View All Dogs</h2></Link>
          <Link className='nav-link' to="/animals/cat/new"><h2>Submit a Cat For Adoption</h2></Link>
          <Link className='nav-link' to="/animals/dog/new"><h2>Submit a Dog For Adoption</h2></Link>
          <Link className='nav-link' to="/donation"><h2>View Our Donations</h2></Link>
          <Link className='nav-link' to="/donation/new"><h2>Make a Donation</h2></Link>
        </div>
      </header>

      <Outlet />
    </>
  );
}