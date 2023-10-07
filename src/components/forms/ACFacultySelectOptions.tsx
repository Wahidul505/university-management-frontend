import React from "react";
import SelectFormInput from "./SelectFormInput";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { IAcademicFaculty } from "@/types";

const ACFacultySelectOptions = ({
  name,
  label,
}: {
  name: string;
  label: string;
}) => {
  const { data, isLoading } = useAcademicFacultiesQuery({ limit: 100 });
  const academicFaculties: IAcademicFaculty[] =
    data?.academicFaculties as IAcademicFaculty[];
  const options =
    academicFaculties &&
    academicFaculties?.map((acFaculty) => ({
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

export default ACFacultySelectOptions;
