import "./App.css";
import NavBar from "./Components/NavBar";
import Prueba from "./Components/Prueba/Prueba";
import Ultra_S23 from './Components/Ultra_S23.png';

function App() {
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
                    <img src={Ultra_S23} /> <Prueba href="#" nombre="Samsung" modelo="S23 Ultra" precio="120.000" />
                </ul>
                <ul>
                    <img src={Ultra_S23} /> <Prueba nombre="Samsung" modelo="S23 Ultra" precio="120000" />
                </ul>
            </form>
        </div >
    );
}

export default App;
