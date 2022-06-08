import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import Navigation from './routes/Navigation';

function App() {
   return (
      <BrowserRouter>
         <Navigation />
         <section className='container'>
            <Routes />
         </section>
      </BrowserRouter>
   );
}

export default App;
