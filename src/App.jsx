import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Contact, { contactData } from './pages/Contact';
import AppLayout from './components/layout/AppLayout';
import Movie from './pages/Movie';
import "./App.css"
import ErrorPage from './pages/ErrorPage';
import getMovieData from './api/GetApiData';
import MovieDetails from './components/UI/MovieDetails';
import GetMovieDetails from './api/GetMovieDetails';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'contact',
          element: <Contact />,
          action: contactData
        },
        {
          path: 'movie',
          element: <Movie/>,
          loader: getMovieData,
        },
        {
          path: 'movie/:movieID',
          element: <MovieDetails/>,
          loader: GetMovieDetails,
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
