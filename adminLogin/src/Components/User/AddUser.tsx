import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [userType, setUserType] = useState("");
  const saveUser = () => {
    // Code to save user
  };

  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return (
    <div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          CompanyName
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-lg"
        >
          UserType
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-lg"
            id="colFormLabelLg"
            placeholder="col-form-label-lg"
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          />
        </div>
      </div>
      <button onClick={saveUser}>Save</button>
    </div>
  );
};

export default AddUser;
