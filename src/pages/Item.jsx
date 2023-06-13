import React from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailConteiner from '../components/ItemDetailConteiner';
import { BurgersList } from '../json/burgers';

const Item = () => {
    const {itemId} = useParams()

    const burgerFilterById = BurgersList.filter((burgers) => burgers.id === parseInt(itemId));

    return <ItemDetailConteiner burgersList={burgerFilterById}/>
}

export default Item