import '../App.css';
import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const BurgerCard = ({burgerData}) => {
    return (
    <Card bg={'black'} text={'white'} className='card-list'>
        <Card.Header className='p-0'>
            <Carousel slide={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <img
                    className="card-list-img"
                    src={burgerData.img[0]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="card-list-img"
                    src={burgerData.img[1]}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="card-list-img"
                    src={burgerData.img[2]}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>  
        </Card.Header>
        <Card.Body >
            <Card.Title className='center'>{burgerData.name}</Card.Title>
            <br/>
            <Card.Text>
                {burgerData.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="transparent right">
            <Button variant="warning"><Link id='detail' className='link-nav' to={`/item/${burgerData.id}`}>Details</Link></Button>
        </Card.Footer>
    </Card>
)
}

export default BurgerCard