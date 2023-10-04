"use client";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { authKey } from "@/constants/authToken";
import { isUserLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isLoggedIn = isUserLoggedIn(authKey);
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsLoading(false);
  }, [router, isLoggedIn]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <Layout hasSider>
      <Sidebar />
      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
