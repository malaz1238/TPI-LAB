import React from 'react'
import NavBar from "../NavBar/NavBar";
import Prueba from "../Shop/Prueba";
import Ultra_S23 from '../Shop/Ultra_S23.png';

const Shop = () => {
    return (
        <div className="App">
            <NavBar />
            <form className="Itemsleft">
                <ul>
                    <button>Busqueda</button>
                </ul>
            </form>
            <form class="Items">
                <ul>
                    <img src={Ultra_S23} /> <Prueba nombre="Samsung" modelo="S23 Ultra" precio="120.000" />
                </ul>
                <ul>
                    <img src={Ultra_S23} /> <Prueba nombre="Samsung" modelo="S23 Ultra" precio="120000" />
                </ul>
            </form>
        </div >
    )
}

export default Shop