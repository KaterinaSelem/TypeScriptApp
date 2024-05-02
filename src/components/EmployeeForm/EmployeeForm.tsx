import { useFormik } from 'formik';
import Input from 'components/Input/Input';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormComponent,
} from './styles';
import { EmployeeFormValues } from './types';
import Button from 'components/Button/Button';

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      age: '',
      position: '',
      agreement: false,
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });
  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}>
      <Input
        name='name'
        placeholder='Enter your name'
        label='Name'
        onInputChange={formik.handleChange}
        value={formik.values.name}
      />
      <Input
        name='surname'
        placeholder='Enter your surname'
        label='Surname'
        onInputChange={formik.handleChange}
        value={formik.values.surname}
      />
      <Input
        name='age'
        placeholder='Enter your age'
        label='Age'
        onInputChange={formik.handleChange}
        value={formik.values.age}
      />
      <Input
        name='position'
        placeholder='Enter your position'
        label='Position'
        onInputChange={formik.handleChange}
        value={formik.values.position}
      />
      <CheckboxContainer>
        <Checkbox
          id='agreement-id'
          name='agreement'
          type='checkbox'
          onChange={formik.handleChange}
          checked={formik.values.agreement}
        />
        <CheckboxLabel htmlFor='agreement-id'>I agree!</CheckboxLabel>
      </CheckboxContainer>
      <Button type='submit' name='CREATE' disabled={!formik.values.agreement}/>
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
