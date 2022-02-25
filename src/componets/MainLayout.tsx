import React, { FC, useState } from "react";
import { Tabs, Input, Typography, Layout } from "antd";

import "../style/main-layout.scss";
const { TabPane } = Tabs;
const { Title } = Typography;
const { Header, Content } = Layout;
const MainLayout: FC = ({ children }) => {
  return (
    <div className="main-layout">
      <Header className="app-header">
        <div className="app-header--title">
          <Title level={3}>Inventory</Title>
        </div>
        <div className="app-header--tabs">
          <Tabs defaultActiveKey="1" type="card" size="large">
            <TabPane tab="Rooms" key="1"></TabPane>
            <TabPane tab="User" key="2"></TabPane>
            <TabPane tab="Storage" key="3"></TabPane>
          </Tabs>
        </div>
        <div className="app-header--search">
          <Input
            placeholder="Global search"
            allowClear
            style={{ width: 300 }}
          />
        </div>
      </Header>
      <Content className="app-main-content">{children}</Content>
      <div>{}</div>
    </div>
  );
};
export default MainLayout;
