import React, { useState } from "react";
import { Trash2 } from "lucide-react";

export default function OrderList() {
  const [orders, setOrders] = useState([
    {
      id: "#14235",
      date: "Jan 25th, 2025",
      customer: "Cahyo Nugroho",
      location: "Lando Street 5th Yogas",
      amount: "$45.30",
      status: "New Order",
    },
    {
      id: "#14253",
      date: "Jan 23th, 2025",
      customer: "Fredo Anggara",
      location: "Corner Street 5th Londo",
      amount: "$37.30",
      status: "Processing",
    },
    {
      id: "#14267",
      date: "Jan 22th, 2025",
      customer: "John Smith",
      location: "Main Street 3rd Block",
      amount: "$52.80",
      status: "Delivered",
    },
    {
      id: "#14289",
      date: "Jan 21th, 2025",
      customer: "Michael Lee",
      location: "Sunset Road 2nd Ave",
      amount: "$61.40",
      status: "New Order",
    },
    {
      id: "#14301",
      date: "Jan 20th, 2025",
      customer: "Alicia Gomez",
      location: "Palm Street 9th Block",
      amount: "$28.90",
      status: "Delivered",
    },
    {
      id: "#14315",
      date: "Jan 19th, 2025",
      customer: "Robert Brown",
      location: "Hill View Street 4th",
      amount: "$74.10",
      status: "Processing",
    },
  ]);

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Order List</h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    #
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Order ID
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Customer Name
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Location
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Amount
                  </th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
                    Status Order
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">
                    Delete Order
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, index) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {index + 1}
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-800">
                      {order.id}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {order.date}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-800">
                      {order.customer}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      {order.location}
                    </td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-800">
                      {order.amount}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          order.status === "New Order"
                            ? "bg-blue-100 text-blue-700"
                            : order.status === "Processing"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="inline-flex items-center justify-center p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete Order"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
