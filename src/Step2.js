import React from "react";
import MainContainer from './components/MainContainer';
import Typography from '@material-ui/core/Typography';


export const Step2 = () => {
  return (
    <MainContainer>
      <Typography>👩‍💻 Step 2 👩‍💻</Typography>
      <Form>
        <Input type="email" name="email" label="Email" required/>
      </Form>
    </MainContainer>
  );
};
