import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './HeaderBar.css';
import BikesPage from "./BikesPage"
import CarsPage from "./CarsPage"
import CategoryPage3 from './CategoryPage3';
import Home from "./Home"
import Layout from './Layout';

const HeaderBar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout />}>
        <Route path = "/Home" element = {<Home />}/>
        <Route path = "/bikes" element = {<BikesPage />}/>
        <Route path = "/cars" element = {<CarsPage />}/>
        <Route path = "/category3" element = {<CategoryPage3 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default HeaderBar;
