import "./App.css";
import Dashboard from "./Components/FoodBNBSideBar.jsx";
import React from "react";
import Header from "./Components/AdminHeader.jsx";
import AdminBody from "./Components/Admin_Body.jsx";
import DashboardCharts from "./Components/DashboardsCharts.jsx";
import OrderList from "./Components/OrderList.jsx";

function App() {
  return (
    <>
      <Header />
      <AdminBody />
      <Dashboard />
      <DashboardCharts />
      <OrderList />
    </>
  );
}

export default App;
