"use client";
import { useDepartmentQuery } from "@/redux/api/departmentApi";
import React from "react";

const EditDepartmentPage = ({ params }: { params: any }) => {
  const { id } = params;
  const { data, isLoading } = useDepartmentQuery(id);

  console.log(data);
  return <div>{id}</div>;
};

export default EditDepartmentPage;
