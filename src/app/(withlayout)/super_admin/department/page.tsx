import ActionHeader from "@/components/ui/ActionHeader";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageDepartmentPage = () => {
  return (
    <div>
      {" "}
      <ActionHeader title="Department List">
        <Link href={"/super_admin/department/create"}>
          <Button>Create Department</Button>
        </Link>
      </ActionHeader>
    </div>
  );
};

export default ManageDepartmentPage;
