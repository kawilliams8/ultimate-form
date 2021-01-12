import React from "react";
import { MainContainer } from "./components/MainContainer";
import { Form } from "./components/Form";
import { Input } from "./components/Input";
import { PrimaryButton } from "./components/PrimaryButton";
import { useData } from "./DataContext";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a correctly formatted email address.")
    .required("Email is a required field.")
});

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
    resolver: yupResolver(schema)
  });

  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    history.push("/step3");
    setValues(data);
  }

  return (
    <MainContainer>
      <Typography>👩‍💻 Step 2 👩‍💻</Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          type="email"
          name="email"
          label="Email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
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
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
