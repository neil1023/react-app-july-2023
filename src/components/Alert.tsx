import React from "react";

interface Props {
  text: string;
}

export const Alert = ({ text }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {text}
    </div>
  );
};
