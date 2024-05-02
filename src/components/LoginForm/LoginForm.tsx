import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import { LoginFormComponent, LoginInputContainer, LoginName } from './styles';
import { useFormik } from 'formik';
import { LoginFormValues, LOGIN_FIELD_NAMES } from './types';
import * as Yup from 'yup';

function LoginForm() {
  //validations scheme

  const scheme = Yup.object().shape({
    [LOGIN_FIELD_NAMES.EMAIL]: Yup.string()
      .required('Field email required!')
      .email('Field type email'),
    [LOGIN_FIELD_NAMES.PASSWORD]: Yup.number()
      .typeError('Password must be number')
      .required('Field password required!')
      .max(10, 'Max 10 symbols')
      .min(3, 'Min 3 symbols')
  });

  const formik = useFormik({
    initialValues: {
      [LOGIN_FIELD_NAMES.EMAIL]: '',
      [LOGIN_FIELD_NAMES.PASSWORD]: '',
    } as LoginFormValues,
    validationSchema: scheme,
    validateOnChange: false,
    onSubmit: (values: LoginFormValues) => {
      console.log(values);
    },
  });

  return (
    <LoginFormComponent //onSubmit={formik.handleSubmit}
    >
      <LoginName>Login form</LoginName>
      <LoginInputContainer>
        <Input
          name={LOGIN_FIELD_NAMES.EMAIL}
          placeholder='Enter your email'
          label='Email'
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.EMAIL]}
          error={formik.errors[LOGIN_FIELD_NAMES.EMAIL]}
        />
        <Input
          name={LOGIN_FIELD_NAMES.PASSWORD}
          type='password'
          placeholder='Enter your password'
          label='Password'
          onInputChange={formik.handleChange}
          value={formik.values[LOGIN_FIELD_NAMES.PASSWORD]}
          error={formik.errors[LOGIN_FIELD_NAMES.PASSWORD]}
        />
      </LoginInputContainer>
      <Button type='submit' name='Login' />
    </LoginFormComponent>
  );
}

export default LoginForm;
