import React, { useState, useEffect } from "react";
import ItemListConteiner from "../components/ItemListConteiner";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoaderComponent from "../components/LoaderComponent";

const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [welcome, setWelcome] = useState(true);
    const [error, setError] = useState(false);
    // const [typeError, setTypeError] = useState("");

    useEffect(() => {
        const db = getFirestore();

        const productCollection = collection(db, "products");
        getDocs(productCollection)
        .then((snapshot) => {
            setProductsData(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        })
        .catch((error) => setError(true))
        .then(() => setLoading(false));
    }, []);

    setTimeout(() => {
        setWelcome(false);
    }, 3000);

    return (
        <div className={"homeStyles"}>
        {loading ? (
            <div >
                <LoaderComponent />
            </div>
        ) : error ? (
            <div>Error </div>
        ) : welcome ? (
            <div >
                <p className={"font-46"}>Welcome</p>
            </div>
        ) : (
            <ItemListConteiner productsData={productsData} />
        )}
        </div>
    );
};

export default Home;