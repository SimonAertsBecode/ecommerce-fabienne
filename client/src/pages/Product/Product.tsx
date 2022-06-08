import { useAxios } from '../../utils/hooks/useAxios';
import { IProduct } from '../../utils/interface/interfaces';
import Loading from '../../components/main/Loading';
import { useParams } from 'react-router-dom';

const Product = () => {
   const { id } = useParams();
   const {
      datas: product,
      error,
      loading,
   } = useAxios<IProduct>({
      method: 'GET',
      url: `products/find/${id}`,
   });

   if (!product) return <strong>{error}</strong>;

   const { title, image, description } = product;

   return (
      <section className='product'>
         <Loading loading={loading} text={'Loading...'}>
            <section className='image'>
               <img src={`${image}`} alt={`${title}`} />
            </section>
            <section className='description'>
               <p>{description}</p>
            </section>
         </Loading>
      </section>
   );
};

export default Product;
