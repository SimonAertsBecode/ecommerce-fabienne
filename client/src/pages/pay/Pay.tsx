import { Link, useLocation } from 'react-router-dom';

const Pay = () => {
   const location = useLocation();
   const { pathname } = location;

   return (
      <section className='pay-page'>
         <h1>Page concernée au paiement</h1>
         <Link to={`${pathname}/payment`}>
            <button>aller payer</button>
         </Link>
      </section>
   );
};

export default Pay;
