import React from "react";
import "../src/style/app.scss";
import CastomCard from "./componets/Card";
import MainLayout from "./componets/MainLayout";
import RoomPage from "./pages/Room";
function App() {
  return (
    <div className="App">
      <MainLayout>
        <RoomPage />
      </MainLayout>
    </div>
  );
}

export default App;
