import "./index.css"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import { DarkThemeToggle, Flowbite } from 'flowbite-react';


import Nav from "./components/utils/Nev"
import Foot from "./components/utils/Foot"


import Home from "./components/Home/index";
import MovieDetails from "./components/MoviesDetail/index";
import TicketBooking from "./components/TicketBooking/index"
import NearbyEvents from "./components/NearbyEvent/index"
import LatestMovies from "./components/LatestMovies/index"
import FinalBooking from "./components/FinalBooking/index"
import UpcomingMovies from "./components/UpcomingMovies/index"

import { store } from './Redux/Store'
import { Provider } from 'react-redux'

const AppLayout = () => {
  return (
    <>
    <Flowbite>
      <Provider store={store}>
      <Nav />
      {/* <DarkThemeToggle /> */}
      <Outlet />
      <Foot />
      </Provider>
    </Flowbite>
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movieDetails",
        element: <MovieDetails />,
      },
      {
        path: "/ticketbooking",
        element: <TicketBooking />,
      },
      {
        path: "/events",
        element: <NearbyEvents />,
      },
      {
        path: "/latestmovies",
        element: <LatestMovies />,
      },
      {
        path: "/finalbooking",
        element: <FinalBooking />,
      },
      {
        path: "/upcomingmovies",
        element: <UpcomingMovies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);