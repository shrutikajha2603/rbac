import React from "react";
import { Link } from "react-router-dom";  

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">
          <Link to="/dashboard">VRV Security</Link>
        </h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:text-yellow-300">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/users" className="hover:text-yellow-300">
              Users
            </Link>
          </li>
          <li>
            <Link to="/roles" className="hover:text-yellow-300">
              Roles
            </Link>
          </li>
          <li>
            <Link to="/permissions" className="hover:text-yellow-300">
              Permissions
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
