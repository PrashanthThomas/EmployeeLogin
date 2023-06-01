import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./User";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [error, setErrors] = useState("");
  const saveUser = () => {
    // Code to save user
    console.log("User", user);
    axios
      .post("http://localhost:5231/api/Admin/addUser", user)
      .then((res) => {
        console.log(res.data);
        navigate("/userTable");
      })
      .catch((err) => setErrors(err.message));
  };
  let user: User = {};

  // if (!localStorage.getItem("isAuth")) {
  //   navigate("/");
  // }
  return (
    <div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          User Id
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="colFormLabelSm"
            placeholder="col-form-label-sm"
            onChange={(e) => (user.id = e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          User Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
            onChange={(e) => (user.userName = e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          Company Id
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
            onChange={(e) => (user.companyId = e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          Company Name
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
            onChange={(e) => (user.companyName = e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">
          User Type
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="colFormLabel"
            placeholder="col-form-label"
            onChange={(e) => (user.userType = e.target.value)}
          />
        </div>
      </div>
      <button onClick={saveUser}>Save</button>
    </div>
  );
};

export default AddUser;
