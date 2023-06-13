import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const BurgerDetailCard = ({burgerData}) => {
    return (
        <Card bg={'dark'} text={'white'} style={{ width: '72rem', margin: 40 }}>
        <Card.Header style={{padding:'0', height:'25rem', width:'72rem'}}>
            <br/>
            <Card.Title className="mb-2 text">{burgerData.name}</Card.Title>
            <Carousel slide={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'1152px', height:'352px', objectFit:'cover' }}
                    className="d-block rounded"
                    src={burgerData.img[0]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'1152px', height:'352px', objectFit:'cover' }}
                    className="d-block rounded"
                    src={burgerData.img[1]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'1152px', height:'352px', objectFit:'cover' }}
                    className="d-block rounded"
                    src={burgerData.img[2]}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Card.Header>
        <Card.Body>
            <Card.Subtitle className="mb-2 text-muted"><Link to={`/category/${burgerData.category}`}>{burgerData.category}</Link></Card.Subtitle>
            <Card.Title>{burgerData.description}</Card.Title>
            <Card.Text>
                {burgerData.elaboration}
            </Card.Text>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>Ingredients:</ListGroup.Item>
                <ListGroup.Item>🥩 {burgerData.meatUsed}</ListGroup.Item>
                <ListGroup.Item>🍞 {burgerData.breadUsed}</ListGroup.Item>
                <ListGroup.Item>🍔 {burgerData.toppings}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
        <Card.Footer className="transparent">
            <Card.Text>💲 {burgerData.price}</Card.Text>
            <Button variant='success'>Add to cart</Button>
        </Card.Footer>
    </Card>

    )
}

export default BurgerDetailCard