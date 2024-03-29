"use client";
import ActionHeader from "@/components/ui/ActionHeader";
import UMTable from "@/components/ui/UMTable";
import {
  useDeleteDepartmentMutation,
  useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { Button, Input, message } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import dayjs, { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";

const ManageDepartmentPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteDepartment] = useDeleteDepartmentMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debounce = useDebounce(searchTerm, 600);

  if (!!debounce) query["searchTerm"] = searchTerm;

  const { data, isLoading } = useDepartmentsQuery({ ...query });

  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: function (date: any) {
        return date && dayjs(date).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
      // sorter: (a: any, b: any) => a.age - b.age,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Button
              onClick={() => handleDeleteDepartment(data?.id)}
              size="middle"
            >
              <DeleteOutlined />
            </Button>
            <Link href={`/super_admin/department/edit/${data.id}`}>
              <Button size="middle" style={{ margin: "0px 5px" }}>
                <EditOutlined />
              </Button>
            </Link>
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

  const handleDeleteDepartment = async (id: string) => {
    try {
      message.loading("Deleting Department...");
      await deleteDepartment(id);
      message.success("Department Deleted");
    } catch (error: any) {
      message.error(error?.message);
    }
  };

  return (
    <div>
      {" "}
      <ActionHeader title="Department List">
        <Input
          size="large"
          type="text"
          style={{
            width: "30%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href={"/super_admin/department/create"}>
            <Button>Create Department</Button>
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
          tableData={departments}
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

export default ManageDepartmentPage;
