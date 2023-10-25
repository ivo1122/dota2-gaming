import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Players from "../pages/players/Players";
import PlayerDetails from "../pages/players/PlayerDetails";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/coach-account/Dashboard";

import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/players" element={<Players />} />
      <Route path="/players/id" element={<PlayerDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/users/profile/me"
        element={
          <ProtectedRoute allowedRoles={["player"]}>
            <MyAccount />
          </ProtectedRoute>
        }
      />
      <Route
        path="/coaches/profile/me"
        element={
          <ProtectedRoute allowedRoles={["coach"]}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
