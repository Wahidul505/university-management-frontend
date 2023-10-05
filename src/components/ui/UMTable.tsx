"use client";
import { Table } from "antd";
import React from "react";

type ITableProps = {
  loading?: boolean;
  columns: any;
  tableData: any;
  pageSize?: number;
  totalData?: number;
  showSizeChanger?: boolean;
  handleTableChange?: (pagination: any, filter: any, sorter: any) => void;
  handlePaginationChange?: (page: number, pageSize: number) => void;
  showPagination?: boolean;
};

const UMTable = ({
  loading = false,
  columns,
  tableData,
  pageSize,
  totalData,
  showSizeChanger = true,
  handleTableChange,
  handlePaginationChange,
  showPagination,
}: ITableProps) => {
  const paginationConfiguration = showPagination
    ? {
        pageSize: pageSize,
        total: totalData,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: handlePaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={tableData}
      pagination={paginationConfiguration}
      onChange={handleTableChange}
    />
  );
};

export default UMTable;
