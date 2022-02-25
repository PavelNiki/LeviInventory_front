import "../style/card-list.scss";
import { FC } from "react";

const CardList: FC = ({ children }) => {
  return <div className="card-list">{children}</div>;
};
export default CardList;
