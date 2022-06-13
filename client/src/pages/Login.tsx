import FormField from '../components/prebuilt/FormField';
import { useSetState } from '../utils/hooks/useState';

const Login = () => {
   const { fields, handleChange } = useSetState({
      email: '',
      password: '',
   });

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(fields);
   };

   return (
      <section className='login'>
         <form onSubmit={handleSubmit}>
            <FormField label='Email:' name='email' placeholder='user@gmail.com' method={handleChange} type='text' required />
            <FormField label='Password:' name='password' placeholder='password' type='password' method={handleChange} required />
            <button type='submit'>Submit</button>
         </form>
      </section>
   );
};

export default Login;
