import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="p-2 flex-grow-1">Empresa</div>
        <a class="navbar-brand" href="#">
          <img src="https://cdn-icons-png.flaticon.com/512/4202/4202388.png" alt="" width="30" height="24" />Carrito
        </a>
        <button type="button" class="btn btn-outline-light me-2">Iniciar sesión</button>
      </nav>
    </>
  );
};

export default NavBar;
