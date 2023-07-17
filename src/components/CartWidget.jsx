import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";


const CartWidget = () => {
    const [qty, setQty] = useState(0);
    const { count } = useContext(CartContext);
    useEffect(() => {
        setQty(count.products.reduce((total, product) => total + product.qty, 0));
    }, [count]);
    return (
        <div style={{width:"50px"}}>
            <Button variant="secondary" 
                style={{    
                    display: "flex", 
                    width: "42px", 
                    alignItems: "center"
                }}>
                <Link to={"/cart"}>
                    <FontAwesomeIcon icon={faCartPlus} style={{color: "#ffffff"}} />
                    <Badge pill bg="danger" 
                        style={{
                            position: "relative",                                                                                   
                            top: "-1em", 
                        }}>{qty}</Badge> 
                </Link>
            </Button>
        </div>
    )
}

export default CartWidget