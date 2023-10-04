import ActionHeader from "@/components/ui/ActionHeader";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageFacultyPage = () => {
  return (
    <div>
      <ActionHeader title="Faculty List">
        <Link href={"/super_admin/manage-faculty/create"}>
          <Button>Create Faculty Account</Button>
        </Link>
      </ActionHeader>
    </div>
  );
};

export default ManageFacultyPage;
