import React, { MouseEventHandler } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
  onClick: MouseEventHandler;
}

const Button = ({ children, color, onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
