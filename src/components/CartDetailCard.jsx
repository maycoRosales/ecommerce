import '../App.css';
import React from 'react'
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

const CartDetailCard = ({ product, qty }) => {
    return (
    <CardGroup className='card-list'>
        <Card bg={'black'} text={'white'}>
            <Card.Header className='p-0'>
                <Carousel slide={false} indicators={false} interval={null}>
                    <Carousel.Item>
                        <img
                        className="card-list-img"
                        src={product.img[0]}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img 
                        className="card-list-img"
                        src={product.img[1]}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="card-list-img"
                        src={product.img[2]}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>  
            </Card.Header>
        </Card>
        <Card bg={'black'} text={'light'} className='p'>
            <Card.Body className='cart-body-detail'>
                <br/>
                <Card.Title className='center'>{product.name}</Card.Title>
                <br/>
                <Card.Text className='center cart-qty-detail'>
                    {qty.qty}
                </Card.Text>
                <Card.Text className='center cart-text-detail'>
                    Enjoy it
                </Card.Text>
            </Card.Body>
        </Card>
    </CardGroup>
    )
}

export default CartDetailCard