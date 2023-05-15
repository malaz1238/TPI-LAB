import React from 'react'
import { useNavigate } from "react-router";
import NavBar from "../NavBar/NavBar";
import Prueba from "../Shop/Prueba";
import Ultra_S23 from '../Shop/Ultra_S23.png';
import { FaShoppingCart } from 'react-icons/fa'
import login from '../Login/Login'
import "./Shop.css";

const Click = ({ onClick }) => {
    const navigation = useNavigate();
    navigation("/login")
}

const Shop = () => {
    return (
        <div>
            <NavBar />
            <div className="App">
                <form className="Itemsleft">
                    <ul>
                        <button onClick={login}>Busqueda</button>
                    </ul>
                </form>
                <form class="Items">
                    <ul>
                        <button ><img src={Ultra_S23} />  <button> <FaShoppingCart /> Añadir al carrito </button> <Prueba nombre="Samsung" modelo="S23 Ultra" precio="120.000" /> </button>
                    </ul>
                    <ul>
                        <button> <img src={Ultra_S23} /> <Prueba nombre="Samsung" modelo="S23 Ultra" precio="120000" /> </button>
                    </ul>
                </form>
            </div >
        </div >
    )
}

export default Shop