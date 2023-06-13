import React from 'react'
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

const BurgerCard = ({burgerData}) => {
    return (
        <Card bg={'dark'} text={'white'} style={{ width: '18rem', margin: 40 }}>
        <Card.Header style={{padding:'0', height:'18rem', width:'18rem'}}>
            <Carousel slide={false} indicators={false} interval={null}>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'285px', height:'285px', objectFit:'cover'}}
                    className="d-block rounded"
                    src={burgerData.img[0]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'285px', height:'285px', objectFit:'cover'}}
                    className="d-block rounded"
                    src={burgerData.img[1]}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ padding:'1px', width:'285px', height:'285px', objectFit:'cover'}}
                    className="d-block rounded"
                    src={burgerData.img[2]}
                    alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>  
        </Card.Header>
        <Card.Body>
            <Card.Title>{burgerData.name}</Card.Title>
            <Card.Text>
                {burgerData.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="transparent">
            <Link to={`/item/${burgerData.id}`}>Details</Link>
        </Card.Footer>
    </Card>

    )
}

export default BurgerCard