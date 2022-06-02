import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './Product/ProductList';

const Home = () => {
   return (
      <>
         <h1>Page d'acceuil</h1>
         <Link to={'pay'}>go to payment section</Link>
         <ProductList />
      </>
   );
};

export default Home;
