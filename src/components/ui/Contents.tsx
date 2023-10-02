"use client";
import React from "react";
import { Layout } from "antd";
import UmBreadCrumb from "./UmBreadCrumb";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const breadCrumbItems = [
    {
      label: "student",
      link: "/student",
    },
    {
      label: "admin",
      link: "/admin",
    },
  ];
  return (
    <Layout>
      <UmBreadCrumb items={breadCrumbItems} />
      <Content
        style={{
          minHeight: "100vh",
          color: "black",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default Contents;
