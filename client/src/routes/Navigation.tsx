import { Link } from 'react-router-dom';
import CartIcon from '../pages/Cart/CartIcon';
import { motion } from 'framer-motion';
import { useStringManipulation } from '../utils/class/string';

const listVariant = {
   visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
         delay: i * 0.15,
         ease: 'easeOut',
      },
   }),
   hidden: (i: number) => ({ opacity: 0, x: '-50vh' }),
};

const Navigation = () => {
   const links = ['news', 'about', 'exhibition', 'press', 'contact', 'painting', 'photos', 'visuals'];

   const renderLinks = () => {
      return links.map((link, i) => {
         return (
            <motion.span custom={i} initial='hidden' animate='visible' exit='hidden' variants={listVariant}>
               <Link to={link}>{useStringManipulation.capitalizeFirstLetter(link)}</Link>
            </motion.span>
         );
      });
   };

   return (
      <>
         <nav className='logo'>
            <Link to={'/'}>Home</Link>
         </nav>
         <nav className='main-nav'>
            <Link to={'cart'}>
               <CartIcon />
            </Link>
            <Link to={'login'}>Login</Link>
            <Link to={'register'}>Register</Link>
         </nav>
         <motion.nav className='second-nav'>{renderLinks()}</motion.nav>
      </>
   );
};

export default Navigation;
