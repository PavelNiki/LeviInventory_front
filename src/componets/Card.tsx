import { Button, Card, Typography } from "antd";
import { FC } from "react";
const { Title } = Typography;
const CardComponent: FC = (props) => {
  return (
    <Card className="card-item">
      <Button>Edit</Button>
      <Title level={3}>{"roomName"}</Title>
    </Card>
  );
};
export default Card;
