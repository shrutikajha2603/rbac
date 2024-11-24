import React, { useState } from "react";
import Navbar from "../components/Navbar";

const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["View Users", "Edit Users", "Delete Users"] },
    { id: 2, name: "Editor", permissions: ["View Users", "Edit Users"] },
  ]);

  const [permissions] = useState([
    "View Users",
    "Edit Users",
    "Delete Users",
    "View Roles",
    "Edit Roles",
    "Delete Roles",
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const handleAddRole = () => {
    setSelectedRole(null); // Reset for new role
    setShowModal(true);
  };

  const handleEditRole = (role) => {
    setSelectedRole(role);
    setShowModal(true);
  };

  const handleDeleteRole = (id) => {
    if (window.confirm("Are you sure you want to delete this role?")) {
      setRoles(roles.filter((role) => role.id !== id));
    }
  };

  const handleSaveRole = (role) => {
    if (role.id) {
      // Update existing role
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      // Add new role
      setRoles([...roles, { ...role, id: Date.now() }]);
    }
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Roles Management</h1>
        <button
          onClick={handleAddRole}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
        >
          Add Role
        </button>

        <table className="min-w-full bg-white rounded-md shadow-md overflow-hidden">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 text-left">Role Name</th>
              <th className="py-2 px-4 text-left">Permissions</th>
              <th className="py-2 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id} className="border-b">
                <td className="py-2 px-4">{role.name}</td>
                <td className="py-2 px-4">{role.permissions.join(", ")}</td>
                <td className="py-2 px-4 text-center space-x-2">
                  <button
                    onClick={() => handleEditRole(role)}
                    className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteRole(role.id)}
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
          <RoleModal
            role={selectedRole}
            permissions={permissions}
            onSave={handleSaveRole}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

const RoleModal = ({ role, permissions, onSave, onClose }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === "permissions") {
      const updatedPermissions = checked
        ? [...formData.permissions, value]
        : formData.permissions.filter((perm) => perm !== value);

      setFormData({ ...formData, permissions: updatedPermissions });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-1/3">
        <h2 className="text-xl font-bold mb-4">{role ? "Edit Role" : "Add Role"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Role Name"
            className="w-full p-2 border rounded"
          />
          <div className="space-y-2">
            <h3 className="font-semibold">Permissions:</h3>
            {permissions.map((perm) => (
              <label key={perm} className="block">
                <input
                  type="checkbox"
                  name="permissions"
                  value={perm}
                  checked={formData.permissions.includes(perm)}
                  onChange={handleChange}
                />{" "}
                {perm}
              </label>
            ))}
          </div>
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

export default RolesPage;
