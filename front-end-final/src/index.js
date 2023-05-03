import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Wrapper from './Wrapper';
import NewCat from './NewCat';
import NewDog from './NewDog';
import Cats, { fetchCats } from './Cats';
import Dogs, { fetchDogs} from './Dogs';
import SingleCat, { getSingleCat } from './SingleCat';
import SingleDog, {getSingleDog} from './SingleDog';
import Donations, { fetchDonations } from './Donations';
import NewDonation from './NewDonation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/animals/cat/new",
        element: <NewCat />,
      },
      {
        path: "/animals/dog/new",
        element: <NewDog />,
      },
      {
        path: "/donation/new",
        element: <NewDonation/>,
      },
      {
        path: "/donation",
        loader: fetchDonations,
        element: <Donations />,
      },
      {
        path: "/animals/cat",
        loader: fetchCats,
        element: <Cats/>,  
      },
      {
        path: "/animals/dog",
        loader: fetchDogs,
        element: <Dogs/>,  
      },
      {
        path: "/animals/cat/:cat_id",
        loader: getSingleCat,
        element: <SingleCat/>,
      },
      {
        path: "/animals/dog/:dog_id",
        loader: getSingleDog,
        element: <SingleDog/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
