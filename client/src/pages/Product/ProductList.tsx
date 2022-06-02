import { Link } from 'react-router-dom';
import { useAxios } from '../../utils/hooks/useAxios';
import { product } from '../../utils/interface/Iproduct';

const ProductList = () => {
   const { data: products } = useAxios('products');
   return (
      <section className='products'>
         <h2>Items</h2>
         <ul>
            {products.map((product: product) => {
               return (
                  <li key={product._id}>
                     <Link to={`products/${product._id}`}>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.image} />
                     </Link>
                  </li>
               );
            })}
         </ul>
      </section>
   );
};

export default ProductList;
