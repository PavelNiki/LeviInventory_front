import { Card, Typography } from "antd";
import { FC } from "react";
import CustomButton from "./Button";
import "../style/custom-card.scss";
const { Title } = Typography;
interface CardProps {
  roomName: string;
}
const CustomCard: FC<CardProps> = ({ roomName }) => {
  const handleClick = () => {};
  return (
    <Card className="card-item">
      <CustomButton name="Edit" type="text" event={handleClick} size="middle" />
      <Title level={3}>{roomName}</Title>
    </Card>
  );
};
export default CustomCard;
