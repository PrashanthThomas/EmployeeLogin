import { useNavigate } from "react-router-dom";
import CustomNav from "./CustomNav";

function Dashboard() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login/");
  };
  if (!localStorage.getItem("isAuth")) {
    navigate("/");
  }
  return (
    <>
      <CustomNav></CustomNav>
      <div>
        <button onClick={() => navigate("/client")}>Empolyee List</button>
        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
}

export default Dashboard;
