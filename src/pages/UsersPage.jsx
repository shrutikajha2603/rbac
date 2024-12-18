import React, { useState } from "react";
import Navbar from "../components/Navbar";

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "Editor",
      status: "Inactive",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setSelectedUser(null); // Reset for new user
    setShowModal(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleDeleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleSaveUser = (user) => {
    if (user.id) {
      // Update existing user
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      // Add new user
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  // Toggle between light and dark modes
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"} min-h-screen`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Users Management</h1>
        <button
          onClick={handleAddUser}
          className={`${
            isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          } text-white px-4 py-2 rounded-md mb-4 transition`}
        >
          Add User
        </button>

        <table
          className={`min-w-full ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          } rounded-md shadow-md overflow-hidden`}
        >
          <thead>
            <tr className={`${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Email</th>
              <th className="py-2 px-4 text-left">Role</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className={`${isDarkMode ? "border-gray-700" : "border-gray-300"} border-b`}>
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">{user.status}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className={`${
                      isDarkMode ? "bg-yellow-500 hover:bg-yellow-600" : "bg-yellow-400 hover:bg-yellow-500"
                    } px-3 py-1 rounded`}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className={`${
                      isDarkMode ? "bg-red-600 hover:bg-red-700" : "bg-red-500 hover:bg-red-600"
                    } text-white px-3 py-1 rounded`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <UserModal
            user={selectedUser}
            onSave={handleSaveUser}
            onClose={() => setShowModal(false)}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
    </div>
  );
};

const UserModal = ({ user, onSave, onClose, isDarkMode }) => {
  const [formData, setFormData] = useState(
    user || { name: "", email: "", role: "", status: "Active" }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      } p-6 rounded-md w-1/3`}>
        <h2 className="text-xl font-bold mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
          />
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className={`${
                isDarkMode ? "bg-gray-600 hover:bg-gray-700" : "bg-gray-300 hover:bg-gray-400"
              } px-4 py-2 rounded`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`${
                isDarkMode ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
              } text-white px-4 py-2 rounded`}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersPage;
