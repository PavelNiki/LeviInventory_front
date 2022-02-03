import React, { FC } from "react";
import Header from "./Header";
import "../style/main-layout.scss";
import roomAction from "../store/actions/room/room";
const MainLayout: FC = ({ children }) => {
  return (
    <div className="main-layout">
      <Header />
      {children}
    </div>
  );
};
export default MainLayout;
