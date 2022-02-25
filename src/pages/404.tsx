import { Typography } from "antd";
import { FC } from "react";
import CustomButton from "../componets/Button";
import { useNavigate } from "react-router-dom";
import "../style/404.scss";

const { Title } = Typography;
const Page404: FC = () => {
  const navigate = useNavigate();
  const handlClick = (): void => {
    navigate("/");
  };
  return (
    <div className="page404">
      <Title
        style={{ fontSize: "190px", marginBottom: "0", fontWeight: "600" }}
      >
        404
      </Title>
      <Title
        level={1}
        style={{ margin: "0", fontSize: "55px", fontWeight: "500" }}
      >
        Page not found
      </Title>
      <Title
        level={5}
        style={{ color: "#9698a0", fontSize: "32px", fontWeight: "400" }}
      >
        We are unable to find the page you are looking for
      </Title>
      <CustomButton name="Go Back Home" event={handlClick} size="large" last />
    </div>
  );
};
export default Page404;
