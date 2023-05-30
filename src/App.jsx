//import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListConteiner from './components/ItemListConteiner';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListConteiner greeting="Welcome to BurgerShop🍔"/>
    </div>
  );
}

export default App;
