import React from "react";
import { userList } from "./UserList";
import { useNavigate } from "react-router-dom";

const UserTable = () => {
  const navigate = useNavigate();
  const goDetails = (id: string) => {
    navigate("/userDetails/" + id);
  };
  return (
    <div>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Company Id</th>
          <th>Company Name</th>
          <th>User Permission</th>
          <th>User Type</th>
        </tr>
        {userList.map((item, index) => (
          <tr key={index}>
            <td>{item.userName}</td>
            <td>{item.companyId}</td>
            <td>{item.companyName}</td>
            <td>{item.userPermission}</td>
            <td>{item.userType}</td>
            <td>
              <button onClick={() => goDetails(item.id)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/addUser/")}> Add User</button>
    </div>
  );
};

export default UserTable;
