import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { IRootState } from '../../redux/store';

const CartIcon = () => {
   const quantity = useSelector((state: IRootState) => state.cart.quantity);
   return (
      <section className='cart-icon'>
         <span>{quantity}</span>
         <AiOutlineShoppingCart />
      </section>
   );
};

export default CartIcon;
