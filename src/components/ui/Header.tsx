import React from "react";
import { Avatar, Button, Dropdown, Layout, Row, Space } from "antd";
import type { MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo();
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: <Button onClick={logOut}>Logout</Button>,
    },
  ];

  return (
    <AntHeader
      style={{
        backgroundColor: "lightgray",
      }}
    >
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}
      >
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Space
            wrap
            size={16}
            style={{
              cursor: "pointer",
            }}
          >
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
