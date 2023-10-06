import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";
import { DatePicker } from "antd";

const FormYearPicker = ({ name, label }: { name: string; label?: string }) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <DatePicker
              style={{ width: "100%" }}
              defaultValue={field.value}
              value={field.value ? dayjs().year(field.value) : null}
              picker="year"
              size="large"
              onChange={(_, dateString) => {
                field.onChange(dateString);
              }}
            />
          );
        }}
      />
    </>
  );
};

export default FormYearPicker;
