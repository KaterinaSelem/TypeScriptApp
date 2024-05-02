import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { LoginFormComponent, LoginInputContainer, LoginName } from './styles';
import { useFormik } from 'formik';
import { LoginFormValues } from './types';

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    } as LoginFormValues,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <LoginFormComponent onSubmit ={formik.handleSubmit}>
      <LoginName>Login form</LoginName>
      <LoginInputContainer>
        <Input
          name='login-email'
          type='email'
          placeholder='Enter your email'
          label='Email'
          onInputChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          name='login-password'
          type='password'
          placeholder='Enter your password'
          label='Password'
          onInputChange={formik.handleChange}
          value={formik.values.password}
        />
      </LoginInputContainer>
      <Button type='submit' name='Login' />
    </LoginFormComponent>
  );
}

export default LoginForm;
