import React, { useState } from "react";
import Navbar from "../components/Navbar";

const PermissionsPage = () => {
  const [permissions, setPermissions] = useState([
    { id: 1, name: "View Users" },
    { id: 2, name: "Edit Users" },
    { id: 3, name: "Delete Users" },
    { id: 4, name: "View Roles" },
    { id: 5, name: "Edit Roles" },
    { id: 6, name: "Delete Roles" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  const handleAddPermission = () => {
    setSelectedPermission(null); // Reset for new permission
    setShowModal(true);
  };

  const handleEditPermission = (permission) => {
    setSelectedPermission(permission);
    setShowModal(true);
  };

  const handleDeletePermission = (id) => {
    if (window.confirm("Are you sure you want to delete this permission?")) {
      setPermissions(permissions.filter((perm) => perm.id !== id));
    }
  };

  const handleSavePermission = (permission) => {
    if (permission.id) {
      // Update existing permission
      setPermissions(
        permissions.map((perm) =>
          perm.id === permission.id ? permission : perm
        )
      );
    } else {
      // Add new permission
      setPermissions([
        ...permissions,
        { ...permission, id: Date.now() },
      ]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Permissions Management</h1>
        <button
          onClick={handleAddPermission}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
        >
          Add Permission
        </button>

        <table className="min-w-full bg-white rounded-md shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Permission Name</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {permissions.map((permission) => (
              <tr key={permission.id} className="border-b">
                <td className="py-2 px-4">{permission.name}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleEditPermission(permission)}
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeletePermission(permission.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {showModal && (
          <PermissionModal
            permission={selectedPermission}
            onSave={handleSavePermission}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

const PermissionModal = ({ permission, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    permission || { name: "" }
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
        <div className="bg-white p-6 rounded-md w-1/3">
          <h2 className="text-xl font-bold mb-4">
            {permission ? "Edit Permission" : "Add Permission"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Permission Name"
              className="w-full p-2 border rounded"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

  );
};

export default PermissionsPage;
