import '../App.css';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { CardGroup, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartButtons from './CartButtons';

const BurgerDetailCard = ({productData}) => {
    return (
    <CardGroup className='card-gr'>
        <Card bg={'black'} text={'white'}>
            <Card.Body className='p-0'>
                <Carousel slide={false} indicators={false} interval={null}>
                    <Carousel.Item>
                        <img
                        className='card-detail-img'
                        src={productData.img[0]}
                        alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3 className='detail-description'>{productData.description}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className='card-detail-img'
                        src={productData.img[1]}
                        alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3 className='detail-description'>{productData.description}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className='card-detail-img'
                        src={productData.img[2]}
                        alt='First slide'
                        />
                        <Carousel.Caption>
                            <h3 className='detail-description'>{productData.description}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Card.Body>
        </Card>
        <Card bg={'black'} text={'light'} className='p'>
            <Card.Header className='p-'>
                <br/>
                <Card.Title className='mb-2 text center'>{productData.name}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    {productData.elaboration}
                </Card.Text>
                <br/>
                <ListGroup className='list-group'>
                    <Card.Subtitle>Ingredients:</Card.Subtitle>
                    <br/>
                    {productData.vegetablesUsed 
                        ? <ListGroup.Item variant="dark">Vegetables: {productData.vegetablesUsed}</ListGroup.Item> 
                        : <ListGroup.Item variant="dark">Meat: {productData.meatUsed}</ListGroup.Item>
                    }
                    {productData.dipSuggested
                        ?<ListGroup.Item variant="dark">Dip: {productData.dipSuggested}</ListGroup.Item>
                        :<ListGroup.Item variant="dark">Bread: {productData.breadUsed}</ListGroup.Item>
                    }
                    <ListGroup.Item variant="dark">Toppings: {productData.toppings}</ListGroup.Item>
                </ListGroup>
                <br/>
                <Card.Subtitle className='mb-2 text-muted center'>
                    <Link className='link-nav' to={`/category/${productData.category}`}>{productData.category}</Link>
                </Card.Subtitle> 
            </Card.Body>
            <Card.Footer>
                <ListGroup horizontal={true} className='my-2 card-detail-footer'>
                    <Card.Title>{productData.price}</Card.Title>
                    <Card.Text>💲</Card.Text>
                    <CartButtons productId={productData.id}/>
                </ListGroup>
            </Card.Footer>
        </Card>
    </CardGroup>
    )
}

export default BurgerDetailCard