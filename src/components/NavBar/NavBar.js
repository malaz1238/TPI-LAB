import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigation = useNavigate();

  const goLogin = () => {
    navigation("/Login");
  };

  return (
    <>
      <nav className="navbar bg-primary">
        <div className="p-2 flex-grow-1">Empresa</div>
        <div classname="cart-icon">
          <h2><FaShoppingCart /> <p>Carrito</p></h2>
        </div>
        <button onClick={goLogin} type="button" class="btn btn-outline-light me-2">Iniciar sesión</button>
      </nav>
    </>
  );
};

export default NavBar;
