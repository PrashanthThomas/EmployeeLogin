import React, { useEffect, useState } from "react";
import { userList } from "./UserList";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User } from "./User";

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setErrors] = useState();
  const navigate = useNavigate();
  const goDetails = (id: string) => {
    navigate("/userDetails/" + id);
  };
  const getUsers = () => {
    axios
      .get("http://localhost:5231/api/Admin/getUserList")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => setErrors(err.message));
  };
  useEffect(() => {
    getUsers();
  }, []);
  const deleteUser = (id: string) => {
    axios
      .delete("http://localhost:5231/api/Admin/deleteUser/" + id)
      .then((res) => {
        getUsers();
      })
      .catch((err) => setErrors(err.message));
  };
  return (
    <div>
      <tbody>
        <tr>
          <th>User Id</th>
          <th>User Name</th>
          <th>Company Name</th>
          <th>Company Id</th>
          <th>User Type</th>
        </tr>
        {users.map((item: User, index: number) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.userName}</td>
            <td>{item.companyName}</td>
            <td>{item.companyId}</td>
            <td>{item.userType}</td>
            <td>
              <button onClick={() => goDetails(item.id)}>Details</button>
            </td>
            <td>
              <button onClick={() => deleteUser(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/addUser/")}> Add User</button>
    </div>
  );
};

export default UserTable;
