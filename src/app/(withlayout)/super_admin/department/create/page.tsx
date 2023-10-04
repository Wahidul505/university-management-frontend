"use client";
import Form from "@/components/forms/Form";
import FormDatePicker from "@/components/forms/FormDatePicker";
import FormInput from "@/components/forms/FormInput";
import SelectFormInput from "@/components/forms/SelectFormInput";
import TextArea from "@/components/forms/TextArea";
import ImageUploader from "@/components/ui/ImageUploader";
import {
  bloodGroupInputs,
  genderInputs,
  managementDepartmentInputs,
} from "@/constants/global";
import { adminSchema } from "@/schema/admin";
import { departmentSchema } from "@/schema/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";

const CreateDepartmentPage = () => {
  const handleSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
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
