import FormField from '../utils/prebuilt/FormField';
import { useSetState } from '../utils/hooks/useState';
import { login } from '../redux/authRedux';
import { IUser } from '../utils/interface/interfaces';
import { useAxios } from '../utils/hooks/useAxios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Login = () => {
   const { fields, handleChange } = useSetState({
      username: '',
      password: '',
   });

   const dispatch = useDispatch();

   const { datas: user, error, loading, fetch } = useAxios<IUser>();

   useEffect(() => {
      user && dispatch(login({ user }));
   }, [user, dispatch]);

   if (error) return <strong>{error}</strong>;

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetch({
         method: 'POST',
         url: 'auth/login',
         headers: { accept: '*/*' },
         data: fields,
      });
   };

   return (
      <section className='login'>
         <form onSubmit={handleSubmit}>
            <FormField label='Username:' name='username' placeholder='username...' method={handleChange} type='text' required />
            <FormField label='Password:' name='password' placeholder='password' type='password' method={handleChange} required />
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
};

export default Login;
