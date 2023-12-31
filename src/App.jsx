import React from 'react'
import styled from 'styled-components'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Faculty from './Pages/Faculty';
import Department from './Pages/Department';
import Search from './Pages/Search';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Login from './Pages/Login';
import DomainOptions from './Pages/DomainOptions';
import RecordSearch from './Pages/RecordSearch';

const Container=styled.div`
    background-color: rgb(238, 238, 238);
    width:100%;
    height:100%;
`


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/domain",
    element: <DomainOptions/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/faculty",
    element: <Faculty/>,
  },
  {
    path: "/department",
    element: <Department/>,
  },
  {
    path: "/search",
    element: <Search/>,
  },
  {
    path: "/recordsearch",
    element: <RecordSearch/>,
  },
]);

const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container>
        <Navbar/>
        <RouterProvider router={router} />
      </Container>
    </LocalizationProvider>
  )
}

export default App;
