import React from 'react'
import BurgerDetailCard from './BurgerDetailCard'

const ItemDetailContainer = ({burgersList}) => {
    return (
        <div>
            {burgersList.map((burger) => {
                return <BurgerDetailCard key={burger.id} burgerData={burger}/>
            })}
        </div>
    );
};

export default ItemDetailContainer