"use client";

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
};

const MamaForm = ({ children, onSubmit: submit }: TFormProps) => {
  const methods = useForm<any>();
  const { handleSubmit, reset } = method;
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    submit(data);
    reset();
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default MamaForm;
