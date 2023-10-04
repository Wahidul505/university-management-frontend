"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { Button } from "antd";
import React from "react";

const ChangePasswordPage = () => {
  const handleSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form submitHandler={handleSubmit}>
        <h1
          style={{ marginBottom: "10px", fontSize: "24px", fontWeight: "600" }}
        >
          Reset Password
        </h1>
        <FormInput
          name="oldPassword"
          type="password"
          label="Old Password"
          size="large"
        />
        <FormInput
          name="newPassword"
          type="password"
          label="New Password"
          size="large"
        />
        <Button
          htmlType="submit"
          style={{
            marginTop: "10px",
            display: "block",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ChangePasswordPage;
