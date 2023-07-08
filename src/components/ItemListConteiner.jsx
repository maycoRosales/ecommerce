import React from 'react'
import BurgerCard from '../components/BurgerCard'

const ItemListConteiner = ({burgersList}) => {
    return (
        <div className='card-list-container'>
            {burgersList.map((burger) => {
                return <BurgerCard key={burger.id} burgerData={burger}/>
            })}
        </div>
    );
};

export default ItemListConteiner