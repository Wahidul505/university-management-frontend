"use client";
import React from "react";
import { Layout } from "antd";
import Header from "./Header";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
      <Header />

      <Content
        style={{
          minHeight: "100vh",
          color: "black",
          padding: "15px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
};

export default Contents;
