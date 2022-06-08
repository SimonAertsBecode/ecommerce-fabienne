import { Link } from 'react-router-dom';
import { useAxios } from '../../utils/hooks/useAxios';
import { IProduct } from '../../utils/interface/interfaces';
import Loading from '../../components/main/Loading';

const ProductList = () => {
   const {
      datas: products,
      error,
      loading,
   } = useAxios<IProduct[]>({
      method: 'GET',
      url: 'products/',
   });

   if (!products) return <strong>{error}</strong>;

   return (
      <section className='products'>
         <h2>Items</h2>
         <Loading loading={loading} text={'Loading products...'}>
            <ul>
               {products.map((product) => {
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
         </Loading>
      </section>
   );
};

export default ProductList;
