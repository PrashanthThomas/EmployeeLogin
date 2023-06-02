import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Client } from "./Client";

const ClientTable = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setErrors] = useState();
  const goDetails = (code: string) => {
    navigate("/clientDetails/" + code);
  };
  const getClients = () => {
    axios
      .get("http://localhost:5231/api/Admin/getClientList")
      .then((res) => {
        setClients(res.data);
      })
      .catch((err) => setErrors(err.message));
  };
  useEffect(() => {
    getClients();
  }, []);
  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return (
    <div>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Client Name</th>
          <th>Client Project</th>
          <th>Client Department</th>
          <th>Client Type</th>
        </tr>
        {clients.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.clientProject}</td>
            <td>{item.clientDepartment}</td>
            <td>{item.clientType}</td>
            <td>
              <button onClick={() => goDetails(item.id)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ClientTable;
