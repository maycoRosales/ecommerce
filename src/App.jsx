//import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

const App = () => {
  // const [count, setcount] = useState(0);
  
  // const handleRestar = () =>{
  //   setcount(count - 1);
  // }
  // const handleSumar = () =>{
  //   setcount(count + 1);
  // }
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Welcome to BurgerShop🍔"/>
      {/* <div style={{display: "flex", justifyContent: "center", alignItems:"center", width: "100vw", height: "100vh",background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
        <button onClick={handleRestar}>-</button>
        <span>{count}</span>
        <button onClick={handleSumar}>+</button>
      </div> */}
    </div>
  );
}

export default App;
