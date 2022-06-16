import { Route, Navigate, Routes as Router } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';

import Home from '../pages/Home';
import ProductList from '../pages/Product/ProductList';
import Product from '../pages/Product/Product';
import Pay from '../pages/pay/Pay';
import Payment from '../pages/pay/Payment';
import Success from '../pages/pay/Success';
import Cancel from '../pages/pay/Cancel';
import Cart from '../pages/Cart/Cart';
import UserProfile from '../pages/userProfile/UserProfile';
import Login from '../pages/Login';
import Register from '../pages/Register';
import News from '../pages/News/News';
import About from '../pages/About/About';
import Exhibition from '../pages/Exhibition/Exhibition';
import Press from '../pages/Press/Press';
import Contact from '../pages/Contact/Contact';
import Paintings from '../pages/Paintings/Paintings';
import Photos from '../pages/Photos/Photos';
import Visuals from '../pages/Visuals/Visuals';

const Routes = () => {
   const user = useSelector((state: IRootState) => state.auth.loggedIn);
   return (
      <Router>
         <Route index element={<Home />} />
         <Route path='products'>
            <Route index element={<ProductList />} />
            <Route path=':id' element={<Product />} />
         </Route>
         <Route path={'cart'} element={<Cart />} />
         {user ? (
            <Route path='userProfile' element={<UserProfile />} />
         ) : (
            <>
               <Route path='login' element={<Login />} />
               <Route path='register' element={<Register />} />
            </>
         )}

         <Route path='pay'>
            <Route index element={<Pay />} />
            <Route path='payment' element={<Payment />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
            <Route path='*' element={<Navigate to='/' />} />
         </Route>
         <Route path={'news'} element={<News />} />
         <Route path={'about'} element={<About />} />
         <Route path={'exhibition'} element={<Exhibition />} />
         <Route path={'press'} element={<Press />} />
         <Route path={'contact'} element={<Contact />} />
         <Route path={'painting'} element={<Paintings />} />
         <Route path={'photos'} element={<Photos />} />
         <Route path={'visuals'} element={<Visuals />} />
      </Router>
   );
};

export default Routes;
