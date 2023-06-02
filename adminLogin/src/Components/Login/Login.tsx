import { useState } from "react";
import CustomAlert from "./CustomAlert";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  let [alertMsg, setAlertMsg] = useState("");
  const [user, setUser] = useState({
    userName: "",
    pwd: "",
  });

  const doLogin = () => {
    if (user.userName === "" || user.pwd === "") {
      setAlertMsg("User name or password should not be empty");
      return;
    }

    axios
      .post("http://localhost:5231/api/Admin/verifyLogin", {
        userName: user.userName,
        pwd: user.pwd,
      })
      .then((res) => {
        if (res.data) {
          localStorage.setItem("uName", res.data.userName);
          localStorage.setItem("isAuth", "true");
          navigate("/dashboard/");
        } else {
          setAlertMsg("User name or password is invalid");
        }
      });
    setAlertMsg("");
  };

  return (
    <>
      {alertMsg && (
        <CustomAlert>
          <div>{alertMsg}</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlertMsg("")}
          ></button>
        </CustomAlert>
      )}
      <div className="form-group">
        <label>User Name</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          value={user.userName}
          placeholder="Enter User Name"
          onChange={(e) => {
            setAlertMsg("");
            setUser({ ...user, userName: e.target.value });
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="userPassword"
          value={user.pwd}
          placeholder="Password"
          onChange={(e) => {
            setAlertMsg("");
            setUser({ ...user, pwd: e.target.value });
          }}
        />
      </div>
      <button type="button" className="btn btn-primary" onClick={doLogin}>
        Login
      </button>
    </>
  );
}

export default Login;
