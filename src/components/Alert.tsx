import { MouseEventHandler, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onCloseButtonClicked: MouseEventHandler;
}

export const Alert = ({ children, onCloseButtonClicked }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissable fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseButtonClicked}
      ></button>
    </div>
  );
};
