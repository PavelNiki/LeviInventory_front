import CustomCard from "./Card";
import "../style/card-list.scss";

const CardList = () => {
  return (
    <div className="card-list">
      <CustomCard roomName="test" />
      <CustomCard roomName="test" />
      <CustomCard roomName="test" />
      <CustomCard roomName="test" />
      <CustomCard roomName="test" />
      <CustomCard roomName="test" />
    </div>
  );
};
export default CardList;
