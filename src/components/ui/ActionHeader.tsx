import React from "react";

type IActionButtonProps = {
  title: string;
  children: React.ReactNode | React.ReactElement;
};

const ActionHeader = ({ title, children }: IActionButtonProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <h1 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>
        {title}
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ActionHeader;
