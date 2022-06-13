import { useAxios } from '../../utils/hooks/useAxios';
import { IProduct } from '../../utils/interface/interfaces';
import Loading from '../../components/main/Loading';
import { useParams } from 'react-router-dom';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Product = () => {
   const { id } = useParams();
   const dispatch = useDispatch();

   const [disableBtn, setDisableBtn] = useState(false);

   const {
      datas: product,
      error,
      loading,
   } = useAxios<IProduct>({
      method: 'GET',
      url: `products/find/${id}`,
   });

   if (error) return <strong>{error}</strong>;

   if (!product) return null;

   const { title, image, description } = product;

   const handleClick = () => {
      dispatch(
         addProduct({
            product,
         })
      );
      setDisableBtn(true);
   };

   return (
      <section className='product'>
         <Loading loading={loading} text={'Loading...'}>
            <section className='image'>
               <img src={`${image}`} alt={`${title}`} />
            </section>
            <section className='description'>
               <p>{description}</p>
               <button disabled={disableBtn} onClick={handleClick}>
                  {disableBtn ? 'Product added...' : 'Add product'}
               </button>
            </section>
         </Loading>
      </section>
   );
};

export default Product;
