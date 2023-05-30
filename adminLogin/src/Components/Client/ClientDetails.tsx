import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientList } from "./ClientList";

const ClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let client = clientList.find((e) => e.code === id);
  if (!client) return <h1>No such employee</h1>;
  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return (
    <div>
      <h1>Client Details Page {id}</h1>
      <div>
        Code : {client.code}
        <br></br>
        Name : {client.name}
        <br></br>
        permission : {client.permission}
        <br></br>
        type : {client.type}
        <br></br>
      </div>
      <button
        onClick={() => {
          navigate("/clientTable/");
        }}
      >
        Client List
      </button>
    </div>
  );
};

export default ClientDetails;
