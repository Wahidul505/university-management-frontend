"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import SelectFormInput from "@/components/forms/SelectFormInput";
import { useAddAcademicDepartmentMutation } from "@/redux/api/academic/departmentApi";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";
import { departmentSchema } from "@/schema/department";
import { IAcademicFaculty } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const CreateAcademicDepartmentPage = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const { data } = useAcademicFacultiesQuery({ limit: 100 });
  // @ts-ignore
  const academicFaculties: IAcademicFaculty[] = data?.academicFaculties;
  const options =
    academicFaculties &&
    academicFaculties.map((faculty) => ({
      label: faculty?.title,
      value: faculty?.id,
    }));

  const handleSubmit = async (values: any) => {
    try {
      message.loading("Creating Academic Department...");
      await addAcademicDepartment(values);
      message.success("Academic Department Created");
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Academic Department
      </h1>
      <div>
        <Form
          submitHandler={handleSubmit}
          resolver={yupResolver(departmentSchema)}
        >
          <FormInput name="title" type="text" label="Title" size="large" />
          <SelectFormInput
            name="academicFacultyId"
            options={options}
            size="large"
            placeholder="Select"
            label="Academic Faculty"
          />
          <Button
            htmlType="submit"
            style={{ marginTop: "15px", display: "block" }}
          >
            Create Academic Department
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAcademicDepartmentPage;
