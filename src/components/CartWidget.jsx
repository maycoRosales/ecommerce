import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';



const CartWidget = () => {
    return (
        <div style={{width:"50px"}}>
            <Button variant="secondary" 
                style={{    
                    display: "flex", 
                    width: "42px", 
                    alignItems: "center"
                }}>
                <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff"}} />
                <Badge pill bg="danger" 
                    style={{
                        position: "relative",                                                                                   
                        top: "-1em", 
                    }}>5</Badge> 
            </Button>
        </div>
    )
}

export default CartWidget