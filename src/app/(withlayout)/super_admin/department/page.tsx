"use client";
import ActionHeader from "@/components/ui/ActionHeader";
import UMTable from "@/components/ui/UMTable";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageDepartmentPage = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <Button onClick={() => console.log(data)} danger size="small">
            Delete
          </Button>
        );
      },
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "Mike",
      age: 32,
    },
    {
      key: "2",
      name: "John",
      age: 42,
    },
  ];

  const handleTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    console.log(order, field);
  };

  const handlePaginationChange = (page: number, pageSize: number) => {
    console.log("page:", page);
    console.log("page size:", pageSize);
  };

  return (
    <div>
      {" "}
      <ActionHeader title="Department List">
        <Link href={"/super_admin/department/create"}>
          <Button>Create Department</Button>
        </Link>
      </ActionHeader>
      <div>
        <UMTable
          loading={false}
          columns={columns}
          tableData={tableData}
          pageSize={5}
          totalData={10}
          showSizeChanger={true}
          handleTableChange={handleTableChange}
          handlePaginationChange={handlePaginationChange}
          showPagination={true}
        />
      </div>
    </div>
  );
};

export default ManageDepartmentPage;
