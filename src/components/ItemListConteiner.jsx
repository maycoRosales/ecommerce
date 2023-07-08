import React from 'react'
import BurgerCard from '../components/BurgerCard'

const ItemListConteiner = ({productsData}) => {
    return (
        <div className='card-list-container'>
            {productsData.map((product) => {
                return <BurgerCard key={product.id} productData={product}/>
            })}
        </div>
    );
};

export default ItemListConteiner