import React, { useState } from "react";
import { Menu, X, Home, ShoppingCart, Users, Settings } from "lucide-react";
import FoodBNBLogo from "../assets/foodbnb1.svg";

/**
 * FoodBNB Admin Panel Sidebar Component
 * A collapsible sidebar with smooth animations and gradient background
 *
 * Features:
 * - Collapsed by default, expands on hamburger menu click
 * - Smooth slide-in/out animations
 * - Responsive design for mobile and desktop
 * - Red to orange gradient background
 * - Modern, minimalist design
 */
const FoodBNBSidebar = () => {
  // State to track sidebar open/closed status
  const [isOpen, setIsOpen] = useState(false);

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Navigation items configuration
  // Easy to maintain and extend with new menu items
  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Orders", icon: ShoppingCart, path: "/orders" },
    { name: "Login", icon: Users, path: "/users" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* Hamburger Menu Button - Fixed position on top left */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle sidebar"
      >
        {/* Toggle between hamburger and close icon based on sidebar state */}
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay - Appears when sidebar is open on mobile/tablet */}
      {/* Clicking overlay closes the sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 pt-16 z-30 transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar Container */}
      <aside
        className={`fixed top-16 left-0 h-full w-64 bg-linear-to-b from-red-500 to-orange-500 text-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header with Logo and Brand Name */}
        <div className="flex items-center gap-3 p-6 pt-20 border-b border-white border-opacity-20">
          {/* Logo Image */}
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-lg">
            <img
              src={FoodBNBLogo}
              alt="FoodBNB Logo"
              className="w-8 h-8 object-contain"
            />
          </div>

          {/* Brand Name */}
          <h1 className="text-2xl font-bold tracking-tight">FoodBNB</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
            {/* Map through navigation items to create menu links */}
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-white 
             hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200 group"
                  >
                    <IconComponent
                      size={20}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className="font-medium">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Section (Optional) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white border-opacity-20">
          <p className="text-xs text-white text-opacity-70 text-center">
            © 2025 FoodBNB Admin
          </p>
        </div>
      </aside>
    </>
  );
};

export default FoodBNBSidebar;
