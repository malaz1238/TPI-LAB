import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const changeEmailHandler = (e) => {
    setEmail(e.target.value);
  };

  const logInHandler = (e) => {
    console.log("test");
    //TODO: login logic
  };

  return (
    <div>
      <form>
        <div className="login-container">
          <div className="login-box">
            <h4>¡Bienvenido!</h4>
            <div className="input-container">
              <input
                className="input-control"
                placeholder="Email"
                type="email"
                value={email}
                onChange={changeEmailHandler}
              />
            </div>
            <div className="input-container">
              <input
                className="input-control"
                placeholder="Password"
                type="password"
              />
            </div>
            <button onClick={logInHandler} className="signin-button">
              Iniciar sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
