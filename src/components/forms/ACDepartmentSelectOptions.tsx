import React from "react";
import SelectFormInput from "./SelectFormInput";
import { IAcademicDepartment } from "@/types";
import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";

const ACDepartmentSelectOptions = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({ limit: 100 });
  const academicDepartments: IAcademicDepartment[] =
    data?.academicDepartments as IAcademicDepartment[];
  const options =
    academicDepartments &&
    academicDepartments?.map((acFaculty) => ({
      label: acFaculty?.title,
      value: acFaculty.id,
    }));
  return (
    <SelectFormInput
      name={name}
      options={options}
      size="large"
      placeholder="Select"
      label={label}
    />
  );
};

export default ACDepartmentSelectOptions;
