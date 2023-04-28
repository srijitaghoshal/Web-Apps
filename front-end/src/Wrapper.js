import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
    <link rel="stylesheet" href="style.css" />
      <header>
        <div className='top-link'>
          <Link to="/animals/cat"><h1>View all cats</h1></Link>
          <Link to="/animals/dog"><h1>View all dogs</h1></Link>
          <Link to="/donation"><h1>View our donations</h1></Link>
          <Link to="/donation/new"><h1>Make a donation</h1></Link>
        </div>
      </header>

      <Outlet />
    </>
  );
}
