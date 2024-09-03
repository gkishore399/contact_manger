import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Alert(props: Props) {
  return (
    <>
      <div className="alert alert-primary">{props.children}</div>
    </>
  );
}
export default Alert;
