import CardList from "../componets/CardList";
import { Typography } from "antd";
const { Title } = Typography;
const RoomPage = () => {
  return (
    <div>
      <Title level={3}>Rooms</Title>
      <CardList />
    </div>
  );
};
export default RoomPage;
