import React from "react";
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { FormInput } from './components/FormInput';
import { PrimaryButton } from './components/PrimaryButton';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const Step3 = () => {
  const history = useHistory()
  const { data, setValues } = useData()
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files
    }
  })

  const onSubmit = data => {
    history.push('/result');
    setValues(data);
  }

  return (
    <MainContainer>
      <Typography>👩‍💻 Step 3 👩‍💻</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control}/>
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
