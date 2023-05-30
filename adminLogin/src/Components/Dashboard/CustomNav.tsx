import React from "react";
import { Link } from "react-router-dom";

const CustomNav = () => {
  const name = localStorage.getItem("uName");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/dashboard/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/clientTable/"}>
              Client
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/userTable/"}>
              User
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about/"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/help/"}>
              Help
            </Link>
          </li>
        </ul>
        <span className="navbar-text">Welcome {name}</span>
      </div>
    </nav>
  );
};

export default CustomNav;
