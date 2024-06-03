"use client";

import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  resolver?: any;
  defaultValues?: Record<string, any>;
};

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  style?: any;
} & TFormConfig;

const MamaForm = ({
  children,
  onSubmit: submit,
  style,
  resolver,
  defaultValues,
}: TFormProps) => {
  const formConfig: TFormConfig = {};

  if (resolver) {
    formConfig["resolver"] = resolver;
  }

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

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
