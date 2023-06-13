import React from 'react'
import ItemListConteiner from '../components/ItemListConteiner';
import { BurgersList } from '../json/burgers';
import { useParams } from 'react-router-dom';


const Category = () => {
    const {categoryId} = useParams()

    const burgersListByCategory = BurgersList.filter(burgers => burgers.category === categoryId);

    return <ItemListConteiner burgersList={burgersListByCategory}/>
};

export default Category