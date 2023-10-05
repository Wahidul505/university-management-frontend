"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { departmentSchema } from "@/schema/department";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, message } from "antd";
import React from "react";

const EditDepartmentPage = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const handleUpdateDepartment = async (values: any) => {
    try {
      message.loading("Updating Department...");
      await updateDepartment({ id, data: values });
      message.success("Department Updated");
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  const defaultValues = {
    title: data?.title ? data?.title : "",
  };

  return (
    <div>
      <h1 style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}>
        Update Department
      </h1>
      <div>
        <Form
          submitHandler={handleUpdateDepartment}
          defaultValues={defaultValues}
          resolver={yupResolver(departmentSchema)}
        >
          <FormInput name="title" type="text" label="Title" size="large" />
          <Button
            htmlType="submit"
            style={{ marginTop: "15px", display: "block" }}
          >
            Update Department
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditDepartmentPage;
