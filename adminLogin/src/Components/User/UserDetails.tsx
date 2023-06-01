import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientList } from "../Client/ClientList";
import { userList } from "./UserList";
import { User } from "./User";
import axios from "axios";

const UserDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [user, setUser] = useState<User>(null);
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5231/api/Admin/getUserList/" + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!user) return <h1>No such employee</h1>;
  // if (!localStorage.getItem("isAuth")) {
  //   navigate("/");
  // }
  if (user) {
    return (
      <div>
        <h1>User Details Page {id}</h1>
        <div>
          User Id : {user.id}
          <br></br>
          Name : {user.userName}
          <br></br>
          Company Id : {user.companyId}
          <br></br>
          Company Name : {user.companyName}
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
  }
};

export default UserDetails;
