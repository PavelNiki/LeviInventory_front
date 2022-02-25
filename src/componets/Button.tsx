import { Button } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { FC } from "react";
import "../style/button.scss";

interface InitialProps {
  name: string;
  event: () => void;
  disable?: boolean;
  type?: "link" | "text";
  size: SizeType;
  last?: boolean;
}

const CustomButton: FC<InitialProps> = ({
  name,
  event,
  disable,
  type,
  size,
  last,
}) => {
  return last ? (
    <Button
      onClick={event}
      disabled={disable}
      type={type}
      size={size}
      className="custom-button--last"
    >
      {name}
    </Button>
  ) : (
    <Button
      onClick={event}
      disabled={disable}
      type={type}
      size={size}
      className="custom-button"
    >
      {name}
    </Button>
  );
};
export default CustomButton;
