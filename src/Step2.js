import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

export const Step2 = () => {
  const { data, setValues } = useData();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
  });

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Typography>👩‍💻 Step 2 👩‍💻</Typography>
      <Form>
        <Input
          ref={register}
          type="email"
          name="email"
          label="Email"
          required
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={data.hasPhone}
              defaultValue={data.hasPhone}
              color="primary"
              inputRef={register}
              name="hasPhone"
            />
          }
          label="Do you have a phone?"
        />
        {hasPhone && (
          <Input
            ref={register}
            type="tel"
            id="phoneNumber"
            name="tel"
            label="Phone Number"
          />
        )}
      </Form>
    </MainContainer>
  );
};
