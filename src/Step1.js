import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { Input } from './components/Input';
import { PrimaryButton } from './components/PrimaryButton';
import Typography from '@material-ui/core/Typography';
import { yupResolver } from '@hookform/resolvers/yup';
import { useData } from './DataContext';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().matches(/^([^0-9]*)$/, "First name cannot contain numbers").required("First name is required."),
  lastName: yup.string().matches(/^([^0-9]*)$/, "Last name cannot contain numbers").required("Last name is required.")
})

export const Step1 = () => {
  const { setValues, data } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onBlur",
    resolver: yupResolver(schema)
  });
  const history = useHistory();

  const onSubmit = data => {
    history.push("/step2");
    setValues(data);
  }

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        👩‍💻 Step 1 👩‍💻
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input ref={register} name="firstName" type="text" label="First Name" error={!!errors.firstName} helperText={errors?.firstName?.message}/>
        <Input ref={register} name="lastName" type="text" label="Last Name" error={!!errors.lastName} helperText={errors?.lastName?.message}/>
        <PrimaryButton type="submit">Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
