"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schema/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const CreateAcademicFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const handleSubmit = async (data: any) => {
    try {
      message.loading("Creating Academic Faculty...");
      await addAcademicFaculty(data);
      message.success("Academic Faculty Created");
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Academic Faculty
      </h1>
      <div>
        <Form
          submitHandler={handleSubmit}
          resolver={yupResolver(departmentSchema)}
        >
          <FormInput name="title" type="text" label="Title" size="large" />
          <Button
            htmlType="submit"
            style={{ marginTop: "15px", display: "block" }}
          >
            Create Academic Faculty
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAcademicFacultyPage;
