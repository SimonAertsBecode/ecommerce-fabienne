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
import News from '../pages/news/News';
import About from '../pages/about/About';
import Exhibition from '../pages/exhibition/Exhibition';
import Press from '../pages/press/Press';
import Contact from '../pages/contact/Contact';
import Paintings from '../pages/paintings/Paintings';
import Photos from '../pages/photos/Photos';
import Visuals from '../pages/visuals/Visuals';

const Routes = () => {
   const user = false;
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
