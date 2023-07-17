import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";

const CartButtons = ({ productId }) => {
  const [state, setState] = useState(0);
  const { count, setCount } = useContext(CartContext);
  const handleMoreClick = () => {
    setState(state + 1);
  };

  const handleLessClick = () => {
    setState(state - 1);
  };

  const addToCart = () => {
    const existingProduct = count.products.find(
      (p) => p.productId === productId
    );
    if (existingProduct) {
      existingProduct.qty += state;
    } else {
      const newProduct = {
        productId: productId,
        qty: state,
      };
      setCount((prevState) => ({
        qtyItems: prevState.qtyItems + state,
        products: [...prevState.products, newProduct],
      }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ margin: "10px" }}>
        <Button
          variant="outline-secondary"
          className="rounded-4"
          onClick={handleLessClick}
        >
          -
        </Button>
        <span style={{ margin: "10px", fontSize: "12px" }}>{state}</span>
        <Button
          variant="outline-secondary"
          className="rounded-4"
          onClick={handleMoreClick}
        >
          +
        </Button>
      </div>
      <Button
        variant='warning'
        className="ml-2"
        size="sm"
        onClick={addToCart}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default CartButtons;