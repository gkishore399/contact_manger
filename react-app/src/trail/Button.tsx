import { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  Onclick: () => void;
}
function Button({ children, Onclick }: Props) {
  return (
    <>
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          onClick={Onclick}
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </>
  );
}
export default Button;
