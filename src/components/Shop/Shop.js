import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Items from "./Items";
import Ultra_S23 from '../Img/Ultra_S23.png';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = () => {

    const navigation = useNavigate();

    const goProduct = () => {
        navigation("/Product");
    };

    return (
        <div>
            <NavBar />
            <div className="App">
                <form className="Itemsleft">
                    <ul>
                        <button>Busqueda</button>
                    </ul>
                </form>
                <form class="Items">
                    <ul>
                        <button onClick={goProduct}> <img src={Ultra_S23} />  <button> <FaShoppingCart /> Añadir al carrito </button> <Items nombre="Samsung" modelo="S23 Ultra" precio="120.000" /> </button>
                    </ul>
                    <ul>
                        <button onClick={goProduct}> <img src={Ultra_S23} />  <button> <FaShoppingCart /> Añadir al carrito </button> <Items nombre="Samsung" modelo="S23 Ultra" precio="120.000" /> </button>
                    </ul>
                </form>
            </div >
        </div >
    )
}

export default Shop;