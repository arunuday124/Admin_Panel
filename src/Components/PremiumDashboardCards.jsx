import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  ShoppingCart,
  Users,
  Settings,
  ShoppingBag,
  TrendingUp,
  Clock,
  UserPlus,
  Star,
  Store,
  MapPin,
  Award,
  DollarSign,
  CreditCard,
  Wallet,
  Package,
  CheckCircle,
  XCircle,
  Heart,
  ThumbsUp,
} from "lucide-react";

/**
 * Premium Dashboard Cards Component
 */
const PremiumDashboardCards = () => {
  const dashboardCards = [
    {
      title: "Order Summary",
      value: "2,458",
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      subMetrics: [
        { icon: ShoppingBag, label: "Total", value: "2.4K" },
        { icon: TrendingUp, label: "Growth", value: "+12%" },
        { icon: Clock, label: "Pending", value: "45" },
      ],
    },
    {
      title: "Customers",
      value: "8,342",
      gradient: "from-emerald-600 via-green-500 to-teal-500",
      subMetrics: [
        { icon: Users, label: "Active", value: "6.2K" },
        { icon: UserPlus, label: "New", value: "+156" },
        { icon: Star, label: "Premium", value: "1.8K" },
      ],
    },
    {
      title: "Restaurants",
      value: "456",
      gradient: "from-purple-600 via-violet-500 to-indigo-500",
      subMetrics: [
        { icon: Store, label: "Partners", value: "456" },
        { icon: MapPin, label: "Locations", value: "89" },
        { icon: Award, label: "Featured", value: "34" },
      ],
    },
    {
      title: "Revenue",
      value: "$124.5K",
      gradient: "from-orange-600 via-amber-500 to-yellow-500",
      subMetrics: [
        { icon: DollarSign, label: "Total", value: "$124K" },
        { icon: CreditCard, label: "Card", value: "$98K" },
        { icon: Wallet, label: "Cash", value: "$26K" },
      ],
    },
    {
      title: "Order Status",
      value: "95.2%",
      gradient: "from-rose-600 via-pink-500 to-fuchsia-500",
      subMetrics: [
        { icon: CheckCircle, label: "Complete", value: "2.2K" },
        { icon: Package, label: "Transit", value: "180" },
        { icon: XCircle, label: "Cancelled", value: "78" },
      ],
    },
    {
      title: "Customer Satisfaction",
      value: "4.8/5",
      gradient: "from-red-600 via-orange-500 to-amber-500",
      subMetrics: [
        { icon: Star, label: "Rating", value: "4.8" },
        { icon: Heart, label: "Favorites", value: "3.4K" },
        { icon: ThumbsUp, label: "Reviews", value: "1.9K" },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-gray-50 via-gray-100 to-gray-50 p-6 pt-24">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-black text-gray-900 mb-2">
          Business Overview
        </h2>
        <p className="text-gray-600 font-medium flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Comprehensive metrics with sub-category breakdowns
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardCards.map((card, index) => (
          <div
            key={index}
            className="group relative rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden"
          >
            {/* Apply gradient using inline style for dynamic gradient values */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${card.gradient} opacity-100`}
            ></div>

            {/* Shimmer effect overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Card Content */}
            <div className="relative z-10">
              {/* Top Section: Title and Value */}
              <div className="mb-6">
                <h3 className="text-white/90 text-sm font-bold uppercase tracking-wider mb-3">
                  {card.title}
                </h3>

                <p className="text-white text-5xl font-black mb-1 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {card.value}
                </p>
              </div>

              {/* Divider Line */}
              <div className="w-full h-px bg-white/30 mb-6"></div>

              {/* Sub-Metrics Section */}
              <div className="grid grid-cols-3 gap-4">
                {card.subMetrics.map((subMetric, subIndex) => {
                  const IconComponent = subMetric.icon;

                  return (
                    <div
                      key={subIndex}
                      className="flex flex-col items-center text-center group/submetric"
                    >
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover/submetric:scale-110 group-hover/submetric:bg-white/30 transition-all duration-300 shadow-lg">
                        <IconComponent
                          className="text-white"
                          size={22}
                          strokeWidth={2.5}
                        />
                      </div>

                      <p className="text-white font-bold text-base mb-1">
                        {subMetric.value}
                      </p>

                      <p className="text-white/80 text-xs font-medium">
                        {subMetric.label}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Progress Indicator */}
              <div className="mt-6 h-1 w-full bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white rounded-full transition-all duration-1000 group-hover:w-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Bottom Action Buttons */}
      <div className="mt-10 flex flex-wrap gap-4">
        <button className="group px-8 py-4 bg-linear-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
          <span className="flex items-center gap-2">
            View Detailed Analytics
            <TrendingUp
              size={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </span>
        </button>

        <button className="px-8 py-4 bg-white text-gray-700 rounded-xl font-bold border-2 border-gray-200 hover:border-orange-500 hover:text-orange-600 hover:shadow-lg transition-all duration-300">
          Export Report
        </button>

        <button className="px-8 py-4 bg-white/80 backdrop-blur-xl text-gray-700 rounded-xl font-bold border-2 border-gray-200 hover:border-orange-400 hover:text-orange-600 hover:shadow-lg transition-all duration-300">
          Configure Metrics
        </button>
      </div>
    </div>
  );
};

/**
 * FoodBNB Admin Panel Sidebar Component
 */
const FoodBNBSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navigationItems = [
    { name: "Dashboard", icon: Home, path: "/dashboard" },
    { name: "Orders", icon: ShoppingCart, path: "/orders" },
    { name: "Login", icon: Users, path: "/users" },
    { name: "Settings", icon: Settings, path: "/settings" },
  ];

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-linear-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay */}
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
        {/* Sidebar Header */}
        <div className="flex items-center gap-3 p-6 pt-20 border-b border-white border-opacity-20">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden bg-white rounded-lg">
            <span className="text-red-500 font-bold text-xl">F</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">FoodBNB</h1>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 px-4">
          <ul className="space-y-2">
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

        {/* Footer Section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white border-opacity-20">
          <p className="text-xs text-white text-opacity-70 text-center">
            © 2025 FoodBNB Admin
          </p>
        </div>
      </aside>

      {/* Main Content Area with Dashboard Cards */}
      <div
        className={`transition-all duration-300 ${
          isOpen ? "lg:ml-64" : "ml-0"
        }`}
      >
        <PremiumDashboardCards />
      </div>
    </>
  );
};

export default FoodBNBSidebar;
