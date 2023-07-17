import React, { useContext, useEffect, useState } from "react";
import { collection, getDoc, doc, getFirestore } from "firebase/firestore";
import { CartContext } from "../context/CartContext";
import CartDetailCard from "../components/CartDetailCard";
import LoaderComponent from "../components/LoaderComponent";

const fetchProductsByIds = async (ids) => {
    const db = getFirestore();
    const productRefs = ids.map((id) => doc(collection(db, "products"), id));

    const productSnapshots = await Promise.all(
        productRefs.map((productRef) => getDoc(productRef))
    );

    const products = productSnapshots.map((productSnapshot) => {

        if (productSnapshot.exists()) {
        return { id: productSnapshot.id, ...productSnapshot.data() };
        } else {        
        console.log("existe")
        return null;
        }
    });
    return products.filter((product) => product !== null);
};

const Cart = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {count} = useContext(CartContext);

    useEffect(() => {
        const ids = count.products.map((product) => product.productId);
        fetchProductsByIds(ids)
        .then((res) => {
            setProductsData(res);
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, [count]);
    return( 
        <div className={"homeStyles"}>
        {loading ? (
            <LoaderComponent />
        ) : error ? (
            <div> Error {console.log(productsData)}</div>
        ) : (
                <div className={"cart-list-container"}>
                    {productsData.map((product) => (
                        <CartDetailCard
                            key={product.id}
                            product={product}
                            qty={count.products.find((item) => item.productId === product.id)}
                        />
                    ))}
                </div>
        )}
        </div>
    )
};

export default Cart;