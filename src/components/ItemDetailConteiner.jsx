import React from 'react'
import BurgerDetailCard from './BurgerDetailCard'

const ItemDetailContainer = ({ productsData }) => {
    return (
        <div className='cardDetailContainer'>
            {productsData.map((product) => {
                return <BurgerDetailCard key={product.id} productData={product}/>
            })}
        </div>
    );
};

export default ItemDetailContainer