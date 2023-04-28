import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
  return (
    <>
    <link rel="stylesheet" href="style.css" />
      <header>
        <div className='top-link'>
          <Link to="/stores"><h1>View all stores</h1></Link>
          <Link to="/stores/new"><h1>Create a new store</h1></Link>
        </div>
      </header>

      <Outlet />
    </>
  );
}