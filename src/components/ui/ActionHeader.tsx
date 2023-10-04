import React from "react";

type IActionButtonProps = {
  title: string;
  children: React.ReactNode | React.ReactElement;
};

const ActionHeader = ({ title, children }: IActionButtonProps) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default ActionHeader;
