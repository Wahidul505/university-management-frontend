import ActionHeader from "@/components/ui/ActionHeader";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdminPage = () => {
  return (
    <div>
      <ActionHeader title="Admin List">
        <Link href={"/super_admin/admin/create"}>
          <Button>Create Admin Account</Button>
        </Link>
      </ActionHeader>
    </div>
  );
};

export default ManageAdminPage;
