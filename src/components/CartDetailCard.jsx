import '../App.css';
import React from 'react'
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';
import styles from "./CartDetailCard.module.css";

const CartDetailCard = ({ product, qty }) => {
    console.log({product})
    return (
    <div className={styles.cardsWrapper}>
        <div className={styles.itemWrapper}>
            <div>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={styles.productInfo}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Cantidad: {qty.qty}</p>
            </div>
        </div>
    </div>


    // <Card bg={'black'} text={'white'} className='card-list'>
    //     <Card.Header className='p-0'>
    //         <Carousel slide={false} indicators={false} interval={null}>
    //             <Carousel.Item>
    //                 <img
    //                 className="card-list-img"
    //                 src={product.img[0]}
    //                 alt="First slide"
    //                 />
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img 
    //                 className="card-list-img"
    //                 src={product.img[1]}
    //                 alt="Second slide"
    //                 />
    //             </Carousel.Item>
    //             <Carousel.Item>
    //                 <img
    //                 className="card-list-img"
    //                 src={product.img[2]}
    //                 alt="Third slide"
    //                 />
    //             </Carousel.Item>
    //         </Carousel>  
    //     </Card.Header>
    //     <Card.Body >
    //         <Card.Title className='center'>{product.name}</Card.Title>
    //         <br/>
    //         <Card.Text>
    //             Quantity: {qty.qty}
    //         </Card.Text>
    //     </Card.Body>
    // </Card>
    )
}

export default CartDetailCard