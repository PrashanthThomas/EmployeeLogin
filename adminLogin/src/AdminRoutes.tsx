import { Routes, Route, BrowserRouter, Router } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Help from "./Components/Help";
import About from "./Components/About";
import UserTable from "./Components/User/UserTable";
import AddUser from "./Components/User/AddUser";
import ClientDetails from "./Components/Client/ClientDetails";
import UserDetails from "./Components/User/UserDetails";
import ClientTable from "./Components/Client/ClientTable";

function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userTable" element={<UserTable />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/clientTable" element={<ClientTable />} />
        <Route path="/clientDetails/:id" element={<ClientDetails />} />
        <Route path="/userDetails/:id" element={<UserDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AdminRoutes;
