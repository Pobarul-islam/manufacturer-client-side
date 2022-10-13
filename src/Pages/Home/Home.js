import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews';
import AutomatedTask from './AutomatedTask';


import Banner from './Banner';
import BoostProductivity from './BoostProductivity';
import Fetures from './Fetures';
import Footer from './Footer';
import Impress from './Impress';
import Info from './Info';
import Success from './Success';

import Visa from './Visa';




const Home = () => {
    return (
      <div className="px-12 w-full">
            <Banner></Banner>
            <Visa/>
        <Info></Info>
        <BoostProductivity />
        <AutomatedTask />
            <Success />
            <Impress />
            <Fetures/>

        <Products></Products>
        <p className="text-center mt-10 ">
          <Link className="btn btn-primary" to="/allproduct">
            All Products
          </Link>
        </p>
       
        <Reviews />
        <Footer></Footer>
      </div>
    );
};

export default Home;