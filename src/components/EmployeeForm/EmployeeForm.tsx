import { useFormik } from 'formik';
import * as Yup from 'yup';
import Input from 'components/Input/Input';
import {
  Checkbox,
  CheckboxContainer,
  CheckboxLabel,
  EmployeeFormComponent,
} from './styles';
import { EMPLOYEE_FIELD_NAMES, EmployeeFormValues } from './types';
import Button from 'components/Button/Button';

function EmployeeForm() {
  const scheme = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
      .required('Field name is required!')
      .max(2, 'Max 2 symbols')
      .min(50, 'Min 50 symbols'),
    [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
      .required('Field surname is required!')
      .max(15, 'Max 15 symbols'),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
      .typeError('Age must be number')
      .required('Field age is required!')
      .max(3, 'Max 3 symbols')
      .min(1, 'Min 1 symbols'),
    [EMPLOYEE_FIELD_NAMES.POSITION]: Yup.string().max(30, 'Max 30 symbols'),
    [EMPLOYEE_FIELD_NAMES.AGREEMENT]: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.NAME]: '',
      [EMPLOYEE_FIELD_NAMES.SURNAME]: '',
      [EMPLOYEE_FIELD_NAMES.AGE]: '',
      [EMPLOYEE_FIELD_NAMES.POSITION]: '',
      [EMPLOYEE_FIELD_NAMES.AGREEMENT]: false,
    } as EmployeeFormValues,
    validationSchema: scheme,
    validateOnChange: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormComponent onSubmit={formik.handleSubmit}
    >
      <Input
        name={EMPLOYEE_FIELD_NAMES.NAME}
        placeholder='Enter your name'
        label='Name'
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.SURNAME}
        placeholder='Enter your surname'
        label='Surname'
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.AGE}
        placeholder='Enter your age'
        label='Age'
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
      />
      <Input
        name={EMPLOYEE_FIELD_NAMES.POSITION}
        placeholder='Enter your position'
        label='Position'
        onInputChange={formik.handleChange}
        value={formik.values[EMPLOYEE_FIELD_NAMES.POSITION]}
      />
      <CheckboxContainer>
        <Checkbox
          id='agreement-id'
          name={EMPLOYEE_FIELD_NAMES.AGREEMENT}
          type='checkbox'
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FIELD_NAMES.AGREEMENT]}
        />
        <CheckboxLabel htmlFor='agreement-id'>I agree!</CheckboxLabel>
      </CheckboxContainer>
      <Button type='submit' name='CREATE' disabled={!formik.values.agreement} />
    </EmployeeFormComponent>
  );
}

export default EmployeeForm;
