import React from 'react';
import ItemListConteiner from '../components/ItemListConteiner';
import {BurgersList} from '../json/burgers';

const Home = () => {
    
    return (
        <div>
            <ItemListConteiner burgersList={BurgersList}/>
        </div>
    );
};

export default Home;