import { DatePicker, DatePickerProps, Input } from "antd";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface ITextAreaProps {
  onChange?: (value1: Dayjs | null, value2: string) => void;
  name: string;
  size?: "small" | "large";
  value?: Dayjs;
  label?: string;
}

const FormDatePicker = ({
  name,
  size,
  value,
  label,
  onChange,
}: ITextAreaProps) => {
  const { control, setValue } = useFormContext();
  const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
    setValue(name, dateString);
  };
  return (
    <>
      {label ? label : ""}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            style={{
              width: "100%",
            }}
            value={dayjs(field.value) || ""}
            size={size}
            onChange={handleDateChange}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
