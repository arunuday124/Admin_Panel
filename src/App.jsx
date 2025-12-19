import "./App.css";
import Dashboard from "./Components/FoodBNBSideBar.jsx";
import React, { useState } from "react";
import Header from "./Components/AdminHeader.jsx";
import AdminBody from "./Components/Admin_Body.jsx";
import DashboardCharts from "./Components/DashboardsCharts.jsx";
import OrderList from "./Components/OrderList.jsx";
import AdminAuth from "./Components/AdminAuth";

function App() {
  // State to control sidebar open/close
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle function to pass to components
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // ✅ ADD THIS LINE
  const isLoginPage = window.location.pathname === "/login";

  return (
    <>
      {/* ✅ ADD THIS CONDITION */}
      {isLoginPage ? (
        <AdminAuth />
      ) : (
        <>
          {/* Header with sidebar control */}
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

          {/* Sidebar component */}
          <Dashboard isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area - shifts right when sidebar opens */}
          <main
            className={`transition-all duration-300 ${
              isSidebarOpen ? "lg:ml-64" : "ml-0"
            } bg-gray-950 min-h-screen text-white`}
          >
            <AdminBody />
            <DashboardCharts />
            <OrderList />
          </main>
        </>
      )}
    </>
  );
}

export default App;
