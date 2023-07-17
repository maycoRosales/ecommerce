import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ItemDetailConteiner from '../components/ItemDetailConteiner';
import LoaderComponent from "../components/LoaderComponent";

import { doc, getDoc, getFirestore } from "firebase/firestore";

const Item = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {itemId} = useParams()

    useEffect(() => {
        const db = getFirestore();
    
        const productCollection = doc(db, "products", itemId);
        getDoc(productCollection)
            .then((snapshot) => {
                setProductsData([{ id: snapshot.id, ...snapshot.data()}]);
            })
            .catch((error) => setError(true))
            .then(() => setLoading(false));
    }, [itemId]);
    return (
        // style={homeStyles}
        <div className={"homeStyles"}>
        {loading ? (
            <LoaderComponent />
        ) : error ? (
            <div>Error </div>
        ) : (
            <ItemDetailConteiner productsData={productsData} />
        )}
        </div>
    );
    // return <ItemDetailConteiner productsData={productsData} />;
}

export default Item