"use client";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import React from "react";
import LoginImg from "../../assets/Sign up-rafiki.png";
import Form from "@/components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import FormInput from "@/components/forms/FormInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.service";

type IFormValues = {
  id: string;
  password: string;
};

const Login = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const handleSubmit: SubmitHandler<IFormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      storeUserInfo({ accessToken: res?.accessToken });
      if (res?.accessToken) {
        router.push("/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={LoginImg} width={500} alt="" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <div>
          <Form submitHandler={handleSubmit}>
            <div style={{ marginBottom: "10px" }}>
              <FormInput
                name="id"
                label="User ID"
                size="large"
                type="text"
                placeholder="Enter Your User ID"
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <FormInput
                name="password"
                label="Password"
                size="large"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <Button htmlType="submit">Login</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
