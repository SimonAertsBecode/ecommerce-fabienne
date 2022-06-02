import { useAxios } from '../../utils/hooks/useAxios';
import { product } from '../../utils/interface/Iproduct';
import { useParams } from 'react-router-dom';

const Product = () => {
   const { id } = useParams();
   const { data: product } : product= useAxios(`products/find/${id}`);

   return (
      <section className='product'>
         <section className="image">
            {product.image}
         </section>
         <section className="description">

         </section>
      </section>
   );
};

export default Product;
