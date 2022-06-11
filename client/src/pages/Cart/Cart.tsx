import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IRootState } from '../../redux/store';
import { deleteProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { IProduct } from '../../utils/interface/interfaces';

const Cart = () => {
   const cart = useSelector((state: IRootState) => state.cart);
   const dispatch = useDispatch();

   const removeItem = (product: IProduct) => {
      dispatch(deleteProduct({ product }));
   };

   const displayProducts = () => {
      return cart.products.map((product) => {
         return (
            <li key={product._id}>
               <section className='left'>
                  <h3>{product.title}</h3>
                  <img src={`${product.image}`} alt={`${product.title}`} />
               </section>
               <section className='right'>
                  <p>{product.price}</p>
                  <button
                     onClick={() => {
                        removeItem(product);
                     }}
                  >
                     Remove product
                  </button>
               </section>
            </li>
         );
      });
   };

   return (
      <section className='main-cart'>
         <section className='bag'>
            <h1>Your items</h1>
            <ul>{displayProducts()}</ul>
         </section>
         <section className='resume'>
            <h1>Order summary</h1>
            <strong> Total : {cart.total}</strong>

            <Link to={'/pay/payment'}>Checkout</Link>
         </section>
      </section>
   );
};

export default Cart;
