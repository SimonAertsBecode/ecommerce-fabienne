import { Route, Navigate, Routes as Router } from 'react-router-dom';

import Home from '../pages/home/Home';
import Pay from '../pages/pay/Pay';
import Payment from '../pages/pay/Payment';
import Success from '../pages/pay/Success';
import Cancel from '../pages/pay/Cancel';

const Routes = () => {
   return (
      <Router>
         <Route index element={<Home />} />
         <Route path='pay'>
            <Route index element={<Pay />} />
            <Route path='payment' element={<Payment />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='*' element={<Navigate to='/' />} />
         </Route>
      </Router>
   );
};

export default Routes;
