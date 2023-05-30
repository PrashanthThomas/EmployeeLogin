import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientList } from "../Client/ClientList";
import { userList } from "./UserList";

const UserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let user = userList.find((u) => u.id === id);
  if (!user) return <h1>No such employee</h1>;
  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return (
    <div>
      <h1>User Details Page {id}</h1>
      <div>
        User Name : {user.userName}
        <br></br>
        Company Name : {user.companyName}
        <br></br>
        Company Id : {user.companyId}
        <br></br>
        User Permission : {user.userPermission}
        <br></br>
        User Type : {user.userType}
        <br></br>
      </div>
      <button
        onClick={() => {
          navigate("/userTable/");
        }}
      >
        User List
      </button>
    </div>
  );
};

export default UserDetails;
