"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schema/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const handleSubmit = async (data: any) => {
    try {
      message.loading("Creating Department...");
      await addDepartment(data);
      message.success("Department Created");
    } catch (error: any) {
      message.error(error?.message);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Create Department
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
            Create Department
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateDepartmentPage;
