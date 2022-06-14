import FormField from '../components/prebuilt/FormField';
import { useSetState } from '../utils/hooks/useState';
import { login, logout } from '../redux/authRedux';
import { IRootState } from '../redux/store';
import { useAxios } from '../utils/hooks/useAxios';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Login = () => {
   const { fields, handleChange } = useSetState({
      email: '',
      password: '',
   });
   const [loginFailed, setLoginFailed] = useState<null | string>(null);

   const dispatch = useDispatch();

   const useHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const {
         datas: user,
         loading,
         error,
      } = useAxios({
         method: 'POST',
         url: 'api/auth/login',
         headers: { accept: '*/*' },
         data: fields,
      });

      if (error) {
         setLoginFailed(error);
         dispatch(logout());
         return;
      }
      dispatch(login({ user }));
   };

   return (
      <section className='login'>
         <form onSubmit={useHandleSubmit}>
            <FormField label='Email:' name='email' placeholder='user@gmail.com' method={handleChange} type='text' required />
            <FormField label='Password:' name='password' placeholder='password' type='password' method={handleChange} required />
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
};

export default Login;
