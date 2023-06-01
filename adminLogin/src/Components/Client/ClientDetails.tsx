import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { clientList } from "./ClientList";
import { Client } from "./Client";
import axios from "axios";

const ClientDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let [client, setClient] = useState<Client>();
  let [errors, setErrors] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5231/api/Admin/getClientList/" + id)
      .then((res) => {
        console.log(res.data);
        setClient(res.data);
      })
      .catch((err) => setErrors(err.message));
  }, []);
  if (!client) return <h1>No such Client</h1>;
  // if (!localStorage.getItem("isAuth")) {
  //   navigate("/");
  // }
  return (
    <div>
      <h1>Client Details Page {id}</h1>
      <div>
        Id : {client.id}
        <br></br>
        Name : {client.clientName}
        <br></br>
        Department : {client.clientDepartment}
        <br></br>
        Project : {client.clientProject}
        <br></br>
        Type : {client.clientType}
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
