import { Route, Navigate, Routes as Router } from 'react-router-dom';

import Home from '../pages/Home';
import ProductList from '../pages/Product/ProductList';
import Product from '../pages/Product/Product';
import Pay from '../pages/pay/Pay';
import Payment from '../pages/pay/Payment';
import Success from '../pages/pay/Success';
import Cancel from '../pages/pay/Cancel';
import Cart from '../pages/Cart';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routes = () => {
   const user = true;
   return (
      <Router>
         <Route index element={<Home />} />
         <Route path='products'>
            <Route index element={<ProductList />} />
            <Route path=':id' element={<Product />} />
         </Route>
         <Route path={'cart'} element={<Cart />} />
         <Route path={'login'} element={user ? <Navigate to='/' /> : <Login />} />
         <Route path={'register'} element={user ? <Navigate to='/' /> : <Register />} />
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
