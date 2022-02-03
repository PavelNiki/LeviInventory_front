import React from "react";
import { Tabs, Input, Typography } from "antd";
import "../style/header.scss";
const { TabPane } = Tabs;
const { Search } = Input;
const { Title } = Typography;
const onSearch = () => {};
const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <Title level={3}>Inventory</Title>
      </div>
      <div className="header-tabs">
        <Tabs defaultActiveKey="1" type="card" size="large">
          <TabPane tab="Rooms" key="1"></TabPane>
          <TabPane tab="User" key="2"></TabPane>
          <TabPane tab="Storage" key="3"></TabPane>
        </Tabs>
      </div>
      <div className="header-search">
        <Input placeholder="Global search" allowClear style={{ width: 300 }} />
      </div>
    </div>
  );
};
export default Header;
