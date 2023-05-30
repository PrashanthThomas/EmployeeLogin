import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return <div>Home</div>;
};

export default Home;
