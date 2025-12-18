import React, { useState } from "react";
import {
  ShoppingCart,
  Star,
  XCircle,
  Filter,
  Store,
  PlusCircle,
  Truck,
} from "lucide-react";

const restaurants = [
  "Food Hub",
  "Spice Villa",
  "Burger Point",
  "Pizza Town",
  "Green Bowl",
  "Sushi House",
];

const newRestaurants = [
  { name: "Urban Bites", date: "2024-12-16" },
  { name: "Taco Street", date: "2024-12-15" },
  { name: "Curry Express", date: "2024-12-14" },
  { name: "Pasta Palace", date: "2024-12-13" },
  { name: "Vegan Delight", date: "2024-12-12" },
];

const deliveryPartners = [
  { name: "Alex Rider", status: "Active" },
  { name: "Brian Cole", status: "Active" },
  { name: "Sophia Lee", status: "On Delivery" },
  { name: "Daniel Cruz", status: "Inactive" },
];

export default function AdminPanel() {
  const [showFiveStarOnly, setShowFiveStarOnly] = useState(false);
  const [filterCancellations, setFilterCancellations] = useState(false);

  const orders = [
    {
      id: "ORD-001",
      date: "2024-12-15",
      customer: "John Smith",
      status: "Delivered",
    },
    {
      id: "ORD-002",
      date: "2024-12-14",
      customer: "Emma Wilson",
      status: "Processing",
    },
    {
      id: "ORD-003",
      date: "2024-12-13",
      customer: "Michael Brown",
      status: "Shipped",
    },
    {
      id: "ORD-004",
      date: "2024-12-12",
      customer: "Sarah Davis",
      status: "Delivered",
    },
    {
      id: "ORD-005",
      date: "2024-12-11",
      customer: "James Taylor",
      status: "Processing",
    },
  ];

  const reviews = [
    {
      customer: "Alice Johnson",
      rating: 5,
      comment: "Excellent product! Fast delivery.",
    },
    {
      customer: "Bob Martinez",
      rating: 4,
      comment: "Good quality, minor packaging issues.",
    },
    {
      customer: "Carol White",
      rating: 5,
      comment: "Amazing service and product quality!",
    },
    {
      customer: "David Lee",
      rating: 3,
      comment: "Average experience, room for improvement.",
    },
    { customer: "Eva Garcia", rating: 5, comment: "Best purchase this year!" },
  ];

  const cancellations = [
    {
      id: "ORD-045",
      customer: "Mark Wilson",
      reason: "Changed mind",
      date: "2024-12-16",
    },
    {
      id: "ORD-046",
      customer: "Lisa Anderson",
      reason: "Found cheaper",
      date: "2024-12-15",
    },
    {
      id: "ORD-047",
      customer: "Tom Harris",
      reason: "Changed mind",
      date: "2024-12-14",
    },
    {
      id: "ORD-048",
      customer: "Nina Clark",
      reason: "Duplicate order",
      date: "2024-12-13",
    },
  ];

  const filteredReviews = showFiveStarOnly
    ? reviews.filter((review) => review.rating === 5)
    : reviews;

  const filteredCancellations = filterCancellations
    ? cancellations.filter((c) => c.reason === "Changed mind")
    : cancellations;

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Card 1: Order History */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <ShoppingCart className="w-4 h-4" />
              <h2 className="text-base font-semibold">Order History</h2>
            </div>

            <div className="rounded-lg overflow-y-auto h-44 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-30">
              <table className="w-full">
                <tbody className="text-xs">
                  {orders.map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-white border-opacity-20"
                    >
                      <td className="py-1 px-0.5 text-xs">{order.date}</td>
                      <td className="py-1 px-0.5 text-xs font-medium">
                        {order.id}
                      </td>
                      <td className="py-1 px-0.5 text-xs">{order.customer}</td>
                      <td className="py-1 px-0.5">
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-full ${getStatusColor(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Card 2: Customer Reviews */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                <h2 className="text-base font-semibold">Customer Reviews</h2>
              </div>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showFiveStarOnly}
                  onChange={(e) => setShowFiveStarOnly(e.target.checked)}
                  className="w-3 h-3 rounded"
                />
                <span className="text-[10px]">5★</span>
              </label>
            </div>

            <div className="overflow-y-auto h-44 space-y-2 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-30">
              {filteredReviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded p-2 border border-white border-opacity-20"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-[10px]">
                      {review.customer}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-2.5 h-2.5 ${
                            i < review.rating
                              ? "fill-yellow-300 text-yellow-300"
                              : "text-white opacity-30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-[10px] opacity-90">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Order Cancellations */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4" />
                <h2 className="text-base font-semibold">Cancellations</h2>
              </div>
              <label className="flex items-center gap-1.5 cursor-pointer">
                <Filter className="w-3 h-3" />
                <input
                  type="checkbox"
                  checked={filterCancellations}
                  onChange={(e) => setFilterCancellations(e.target.checked)}
                  className="w-3 h-3 rounded"
                />
              </label>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold">
                {filteredCancellations.length}
              </div>
              <div className="text-[10px] opacity-80">Total</div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-30">
              {filteredCancellations.map((cancel) => (
                <div
                  key={cancel.id}
                  className="rounded p-1.5 border border-white border-opacity-20"
                >
                  <div className="flex justify-between items-start">
                    <span className="font-medium text-[10px]">{cancel.id}</span>
                    <span className="text-[10px] opacity-70">
                      {cancel.date}
                    </span>
                  </div>
                  <div className="text-[10px] opacity-90">
                    {cancel.customer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Cards 4, 5, 6 */}
        <div className="grid grid-cols-3 gap-6">
          {/* Card 4: Restaurants */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-4">
              <Store className="w-4 h-4" />
              <h2 className="text-base font-semibold">Restaurants</h2>
            </div>

            <div className="flex flex-col items-center justify-center h-44">
              <div className="text-5xl font-bold">{restaurants.length}</div>
              <div className="text-sm opacity-80 mt-2">Total Restaurants</div>
            </div>
          </div>

          {/* Card 5: New Restaurants */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <PlusCircle className="w-4 h-4" />
              <h2 className="text-base font-semibold">New Restaurants</h2>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold">{newRestaurants.length}</div>
              <div className="text-[10px] opacity-80">Added This Week</div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-30">
              {newRestaurants.map((res, index) => (
                <div
                  key={index}
                  className="rounded p-1.5 border border-white border-opacity-20"
                >
                  <div className="flex justify-between text-[10px]">
                    <span className="font-medium">{res.name}</span>
                    <span className="opacity-70">{res.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 6: Delivery Partners */}
          <div className="bg-linear-to-b from-red-600 to-orange-500 rounded-lg shadow-lg p-4 text-white h-64">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-4 h-4" />
              <h2 className="text-base font-semibold">Delivery Partners</h2>
            </div>

            <div className="text-center mb-2">
              <div className="text-2xl font-bold">
                {deliveryPartners.length}
              </div>
              <div className="text-[10px] opacity-80">Total Partners</div>
            </div>

            <div className="overflow-y-auto h-36 space-y-1.5 scrollbar-thin scrollbar-thumb-white scrollbar-thumb-opacity-30">
              {deliveryPartners.map((partner, index) => (
                <div
                  key={index}
                  className="rounded p-1.5 border border-white border-opacity-20"
                >
                  <div className="flex justify-between text-[10px]">
                    <span className="font-medium">{partner.name}</span>
                    <span className="opacity-70">{partner.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
