import React from "react";
import { clientList } from "./ClientList";
import { useNavigate } from "react-router-dom";

const ClientTable = () => {
  const navigate = useNavigate();
  const goDetails = (code: string) => {
    navigate("/clientDetails/" + code);
  };

  return (
    <div>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Permission</th>
          <th>Type</th>
        </tr>
        {clientList.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.permission}</td>
            <td>{item.type}</td>
            <td>
              <button onClick={() => goDetails(item.code)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </div>
  );
};

export default ClientTable;
