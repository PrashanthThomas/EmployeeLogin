import { useState } from "react";
import CustomAlert from "./CustomAlert";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const credentials = {
    uName: "admin",
    pwd: "admin",
  };
  let [alertMsg, setAlertMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");

  const doLogin = () => {
    console.log("Here", userName === "", pwd);
    if (userName === "" || pwd === "") {
      setAlertMsg("User name or password should not be empty");
      return;
    }
    if (!(userName === credentials.uName || pwd === credentials.pwd)) {
      setAlertMsg("Invalid user name or password");
    } else {
      setAlertMsg("");
      navigate("/dashboard/");
    }
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
          value={userName}
          placeholder="Enter User Name"
          onChange={(e) => {
            setAlertMsg("");
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          id="userPassword"
          value={pwd}
          placeholder="Password"
          onChange={(e) => {
            setAlertMsg("");
            setPwd(e.target.value);
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
