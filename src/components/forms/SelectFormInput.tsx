import { Input, Select } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

type ISelectOptions = {
  value: string;
  label: string;
};

interface ISelectProps {
  name: string;
  options: ISelectOptions[];
  value?: string | string[] | undefined;
  defaultValue?: ISelectOptions;
  size?: "small" | "large";
  label?: string;
  placeholder?: string;
}

const SelectFormInput = ({
  name,
  options,
  defaultValue,
  value,
  size,
  label,
  placeholder,
}: ISelectProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : ""}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            onChange={onChange}
            options={options}
            value={value}
            defaultValue={defaultValue?.value}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default SelectFormInput;
