import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function CustomAlert(props: Props) {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      <p>{props.children}</p>
    </div>
  );
}

export default CustomAlert;
