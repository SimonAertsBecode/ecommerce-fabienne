import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../redux/store';

const Navigation = () => {
   const quantity = useSelector((state: IRootState) => state.cart.quantity);

   return (
      <>
         <nav className='logo'>
            <Link to={'/'}>Home</Link>
         </nav>
         <nav className='main-nav'>
            <Link to={'cart'}>Cart</Link>
            <Link to={'login'}>Login</Link>
            <Link to={'register'}>Register</Link>
            <Link to={'pay'}>Payment</Link>
         </nav>
         <nav className='second-nav'>
            <Link to={'news'}>News</Link>
            <Link to={'about'}>About</Link>
            <Link to={'exhibition'}>Exhibition</Link>
            <Link to={'press'}>Press</Link>
            <Link to={'contact'}>Contact</Link>
            <Link to={'painting'}>Painting</Link>
            <Link to={'photos'}>Photos</Link>
            <Link to={'visuals'}>Visuals</Link>
         </nav>
      </>
   );
};

export default Navigation;
