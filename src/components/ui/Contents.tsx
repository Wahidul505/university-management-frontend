"use client";
import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>
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
