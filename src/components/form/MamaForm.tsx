"use client";

import { SxProps } from "@mui/material";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  style?: any;
};

const MamaForm = ({ children, onSubmit: submit, style }: TFormProps) => {
  const methods = useForm<any>();

  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} style={style}>
        {children}
      </form>
    </FormProvider>
  );
};

export default MamaForm;
