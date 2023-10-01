"use client";
import React, { ReactElement, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type IFormConfig = {
  defaultValues?: Record<string, any>;
};

type IFormProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & IFormConfig;

const Form = ({ children, submitHandler, defaultValues }: IFormProps) => {
  const formConfig: IFormConfig = {};
  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;

  const methods = useForm<IFormProps>(formConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
