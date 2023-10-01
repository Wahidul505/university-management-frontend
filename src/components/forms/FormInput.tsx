import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface IInputProps {
  name: string;
  type?: string;
  size?: "small" | "large";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: IInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Input
          type={type}
          size={size}
          placeholder={placeholder}
          {...field}
          value={value ? value : field.value}
        />
      )}
    />
  );
};

export default FormInput;
