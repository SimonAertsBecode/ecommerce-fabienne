import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';
import { motion } from 'framer-motion';

const spanVariant = {
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         duration: 0.6,
         delay: 0,
      },
   },
   hidden: {
      opacity: 0,
      scale: 0,
   },
};

const CartIcon = () => {
   const quantity = useSelector((state: IRootState) => state.cart.quantity);
   return (
      <section className='cart-icon'>
         {quantity > 0 && (
            <motion.span initial='hidden' animate='visible' variants={spanVariant}>
               {quantity}
            </motion.span>
         )}
         <AiOutlineShoppingCart />
      </section>
   );
};

export default CartIcon;
