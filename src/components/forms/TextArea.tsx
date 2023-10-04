import { Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface ITextAreaProps {
  name: string;
  size?: "small" | "large";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const TextArea = ({
  name,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
}: ITextAreaProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : ""}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            size={size}
            placeholder={placeholder}
            {...field}
            value={value ? value : field.value}
          />
        )}
      />
    </>
  );
};

export default TextArea;
