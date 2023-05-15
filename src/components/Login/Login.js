import React, { useRef } from "react";
import { useState } from "react";
import NavBar from '../NavBar/NavBar'

import "./Login.css";

const Login = () => {

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const newObj = { ...values, [e.target.name]: e.target.value };
    setValues(newObj);
  };

  const Validation = (values) => {
    const errors = {};
    const emailPattern =
      /^(?![_.-])((?![_.-][_.-])[a-zA-Z\d_.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (values.email === "") {
      errors.email = "El email no puede ser vacío";
    } else if (!emailPattern.test(values.email)) {
      errors.email = "Ingrese un email válido";
    }

    if (values.password === "") {
      errors.password = "Contraseña es obligatoria";
    } else if (!passwordPattern.test(values.password)) {
      errors.password = "Mínimo de 8 caracteres con un número";
    }
    return errors;
  };

  const logInHandler = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    //TODO: si no hay errores, que se logee correctamente y dirija al home con el estatus logeado
  };

  return (
    <div>
      <NavBar />
      <div className="wrapper  d-flex align-items-center justify-content-center w-100">
        <div className="login">
          <h2 className="mb-2">¡Bienvenido a Empresa!</h2>
          <p className="d-flex justify-content-center">
            Inicie sesión para continuar
          </p>
          <form>
            <div className="form-group mb-3">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleInput}
                required
              />
              {errors.email && (
                <p className="text-danger text-center">{errors.email}</p>
              )}
            </div>
            <div className="form-group mb-3">
              <label className="form-label" for="password">
                Contraseña
              </label>
              <input
                className="form-control"
                type="password"
                name="password"
                onChange={handleInput}
                required
              />
            </div>
            {errors.password && (
              <p className="text-danger text-center">{errors.password}</p>
            )}
            <div className="d-flex justify-content-center">
              <button
                onClick={logInHandler}
                className="btn btn-success mt-2 w-50"
                type="submit"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
