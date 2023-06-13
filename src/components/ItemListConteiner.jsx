import React from 'react'
import BurgerCard from '../components/BurgerCard'

const ItemListConteiner = ({burgersList}) => {
    return (
        <div className='cardContainer'>
            {burgersList.map((burger) => {
                return <BurgerCard key={burger.id} burgerData={burger}/>
            })}
        </div>
    );
};

export default ItemListConteiner