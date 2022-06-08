import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './Product/ProductList';

const Home = () => {
   return (
      <section className='home'>
         <h1>Page d'acceuil</h1>
         <ProductList />
      </section>
   );
};

export default Home;
