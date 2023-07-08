import React, { useState, useEffect } from "react";
import ItemListConteiner from "../components/ItemListConteiner";

import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoaderComponent from "../components/LoaderComponent";


// const homeStyles = {
//     width: "100vw",
//     minHeight: "100vh",
//     margin: "auto",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
// };

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
    }, 5000);

    return (
        // style={homeStyles}
        <div >
        {loading ? (
            <LoaderComponent />
        ) : error ? (
            <div>Error </div>
        ) : welcome ? (
            <div>Welcome</div>
        ) : (
            <ItemListConteiner productsData={productsData} />
        )}
        </div>
    );
};

export default Home;