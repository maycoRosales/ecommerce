import '../App.css';
import React from 'react'
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

const BurgerCard = ({productData}) => {
    return (
    <Card bg={'black'} text={'white'} className='card-list'>
        <Card.Header className='p-0'>
            <Carousel slide={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <img
                    className="card-list-img"
                    src={productData.img[0]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="card-list-img"
                    src={productData.img[1]}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="card-list-img"
                    src={productData.img[2]}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
        </Card.Header>
        <Card.Body >
            <Card.Title className='center'>{productData.name}</Card.Title> 
            <Card.Text>
                {productData.description}
            </Card.Text>
            <CartButtons />
        </Card.Body>
        <Card.Footer className="transparent right">
            <Button variant="warning"><Link id='detail' className='link-nav' to={`/item/${productData.id}`}>Details</Link></Button>
        </Card.Footer>
    </Card>
)
}

export default BurgerCard