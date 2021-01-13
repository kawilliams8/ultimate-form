import React from "react";
import { MainContainer } from './components/MainContainer';
import { Form } from './components/Form';
import { FormInput } from './components/FormInput';
import Typography from '@material-ui/core/Typography';

export const Step3 = () => {
  return (
    <MainContainer>
      <Typography>👩‍💻 Step 3 👩‍💻</Typography>
      <Form>
        <FileInput name="files" control={control}/>
      </Form>
    </MainContainer>
  );
};
