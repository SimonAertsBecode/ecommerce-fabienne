import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
   return (
      <>
         <h1>Page d'acceuil</h1>
         <Link to={'pay'}>go to payment section</Link>
      </>
   );
};

export default Home;
