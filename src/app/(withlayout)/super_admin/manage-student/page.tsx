import ActionHeader from "@/components/ui/ActionHeader";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudentPage = () => {
  return (
    <div>
      <ActionHeader title="Student List">
        <Link href={"/super_admin/manage-student/create"}>
          <Button>Create Student Account</Button>
        </Link>
      </ActionHeader>
    </div>
  );
};

export default ManageStudentPage;
