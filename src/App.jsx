import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import MainLayout from './Layouts/MainLayouts';
import HomePages from './Pages.jsx/HomePages';
import AboutPages from './Pages.jsx/AboutPages';
import AcademicsPages from './Pages.jsx/AcademicsPages';
import ContactUsPages from './Pages.jsx/ContactUsPages';

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
// import "./App.css";
// import React from 'react'
// import Hero from "./components/Hero";
// import Testimonials from "./components/Testimonials";
// import Services from "./components/Services";
// import Appreciations from "./components/Appreciations"
// import Programs from "./components/Programs";
// import Footers from "./components/Footers";



const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<MainLayout/>}>
<Route index element={<HomePages/>}/>
<Route path='/about' element={<AboutPages/>}/>

 <Route path='/academics' element={<AcademicsPages/>}/>

 
<Route path='/contactus' element={<ContactUsPages/>}/>
    </Route>
  
   )
 
);

const App= ()=> {
  return<RouterProvider router={router}/>
}


export default App



