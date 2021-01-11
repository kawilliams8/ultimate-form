import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();

  const onSubmit = data => {
    history.push("/step2")
  }

  return (
    <MainContainer>
      <h2>Step 1</h2>
      <Form>
        <input
          ref={register}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          ref={register}
          name="lastName"
          type="text"
          placeholder="Last Name"
        />
        <button type="submit">Next</button>
      </Form>
    </MainContainer>
  );
};
