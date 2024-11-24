import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-around">
        <li>
          <Link
            to="/users"
            className="text-white font-bold text-lg hover:text-gray-400"
          >
            Users
          </Link>
        </li>
        <li>
          <Link
            to="/roles"
            className="text-white font-bold text-lg hover:text-gray-400"
          >
            Roles
          </Link>
        </li>
        <li>
          <Link
            to="/permissions"
            className="text-white font-bold text-lg hover:text-gray-400"
          >
            Permissions
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
