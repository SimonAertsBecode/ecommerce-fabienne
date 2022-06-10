import { BrowserRouter } from 'react-router-dom';

//**Redux import */
import { Provider } from 'react-redux';
import store from './redux/store';

//**Componenent import */
import Routes from './routes/Routes';
import Navigation from './routes/Navigation';

function App() {
   return (
      <BrowserRouter>
         <Provider store={store}>
            <Navigation />
            <section className='container'>
               <Routes />
            </section>
         </Provider>
      </BrowserRouter>
   );
}

export default App;
