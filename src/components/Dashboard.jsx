import React, { useState } from "react";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users"); 

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>

        <div className="flex space-x-4 border-b-2 border-gray-300 pb-2">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "users"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("users")}
          >
            Users
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "roles"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("roles")}
          >
            Roles
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "permissions"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("permissions")}
          >
            Permissions
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-6">
          {activeTab === "users" && <Users />}
          {activeTab === "roles" && <Roles />}
          {activeTab === "permissions" && <Permissions />}
        </div>
      </div>
    </div>
  );
}

// Placeholder for Users Section
function Users() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Users</h2>
      <p className="text-gray-600">This section allows you to view, add, edit, or delete users.</p>
      {/* Add your Users Table or CRUD functionality here */}
    </div>
  );
}

// Placeholder for Roles Section
function Roles() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Roles</h2>
      <p className="text-gray-600">This section allows you to define and manage roles.</p>
      {/* Add your Roles Table or CRUD functionality here */}
    </div>
  );
}

// Placeholder for Permissions Section
function Permissions() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Permissions</h2>
      <p className="text-gray-600">This section allows you to manage permissions for roles.</p>
      {/* Add your Permissions Table or CRUD functionality here */}
    </div>
  );
}

export default Dashboard;
