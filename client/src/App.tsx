import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';

function App() {
   return (
      <section className='container'>
         <BrowserRouter>
            <Routes />
         </BrowserRouter>
      </section>
   );
}

export default App;
