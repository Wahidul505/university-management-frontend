"use client";
import ActionHeader from "@/components/ui/ActionHeader";
import UMTable from "@/components/ui/UMTable";
import { Button, Input, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { useAdminsQuery } from "@/redux/api/adminApi";
import dayjs from "dayjs";

const ManageAdminPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debounce = useDebounce(searchTerm, 600);

  if (!!debounce) query["searchTerm"] = searchTerm;

  const { data, isLoading } = useAdminsQuery({ ...query });

  const admins = data?.admins;
  const meta = data?.meta;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: true,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: function (data: any) {
        return `${data?.firstName} ${data?.middleName} ${data?.lastName}`;
      },
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Department",
      dataIndex: "managementDepartment",
      key: "managementDepartment",
      render: function (data: any) {
        return data?.title;
      },
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Contact No",
      dataIndex: "contactNo",
      key: "contactNo",
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button onClick={() => console.log(data)} size="middle">
              <DeleteOutlined />
            </Button>
            <Button size="middle" style={{ margin: "0px 5px" }}>
              <EditOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  const handleTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    field && setSortBy(field);
    order && order === "ascend" ? setSortOrder("asc") : setSortOrder("desc");
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    page && setPage(page);
    pageSize && setSize(pageSize);
  };

  const handleReloadQueryParams = () => {
    setSearchTerm("");
    setSortOrder("");
    setSortBy("");
  };

  return (
    <div>
      {" "}
      <ActionHeader title="Admin List">
        <Input
          size="large"
          type="text"
          style={{
            width: "30%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href={"/super_admin/admin/create"}>
            <Button>Create Admin</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ marginLeft: "10px" }}
              onClick={handleReloadQueryParams}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionHeader>
      <div>
        <UMTable
          loading={isLoading}
          columns={columns}
          tableData={admins}
          pageSize={size}
          totalData={meta?.total}
          showSizeChanger={true}
          handleTableChange={handleTableChange}
          handlePaginationChange={handlePaginationChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default ManageAdminPage;
