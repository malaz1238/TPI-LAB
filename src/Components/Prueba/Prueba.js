import React from "react";
import "./Prueba.css";

function Prueba(props) {
  return (
    <div className="Prueba">
      <h1>Marca: {props.nombre}</h1>
      <h1>Modelo: {props.modelo}</h1>
      <p>${props.precio}</p>
    </div>
  );
}

export default Prueba;
