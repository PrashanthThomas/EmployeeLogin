import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminRoutes;
