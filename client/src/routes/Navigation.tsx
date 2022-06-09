import { Link } from 'react-router-dom';

const Navigation = () => {
   return (
      <nav>
         <Link to={'/'}>Acceuil</Link>
         <Link to={'cart'}>Panier</Link>
         <Link to={'login'}>Se connecter</Link>
         <Link to={'register'}>S'enregister</Link>
         <Link to={'pay'}>go to payment section</Link>
      </nav>
   );
};

export default Navigation;
