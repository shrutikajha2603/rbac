import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import RolesPage from "./pages/RolesPage";
import PermissionsPage from "./pages/PermissionsPage";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        {/* If you want the Navbar to always be visible, uncomment the line below */}
        {/* <Navbar /> */}

        {/* Define Routes */}
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Users Page */}
          <Route path="/users" element={<UsersPage />} />

          {/* Roles Page */}
          <Route path="/roles" element={<RolesPage />} />

          {/* Permissions Page */}
          <Route path="/permissions" element={<PermissionsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
