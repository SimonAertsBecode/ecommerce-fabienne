import ProductList from './Product/ProductList';
import Loading from '../components/main/Loading';

const Home = () => {
   return (
      <section className='home'>
         <h1>Page d'acceuil</h1>
         <ProductList />
      </section>
   );
};

export default Home;
