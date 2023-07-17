import React, { useEffect, useState } from "react";
import ItemListConteiner from '../components/ItemListConteiner';
import { useParams } from 'react-router-dom';

import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoaderComponent from "../components/LoaderComponent";


const Category = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const {categoryId} = useParams()

    useEffect(() => {
        const db = getFirestore();

        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then((snapshot) => {
            
            const productsFilter = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            }));

            setProductsData(
            productsFilter.filter((products) => products.category === categoryId)
            );
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, [categoryId]);

    return (
        // style={homeStyles}
        <div className={"homeStyles"}>
        {loading ? (
            <LoaderComponent />
        ) : error ? (
            <div>Error </div>
        ) : (
            <ItemListConteiner productsData={productsData} />
        )}
        </div>
    );

    // return <ItemListConteiner productsData={productsData} />;
};

export default Category