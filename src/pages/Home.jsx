import { useState, useEffect } from "react";
import ItemListConteiner from "../components/ItemListConteiner";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import LoaderComponent from "../components/LoaderComponent";

const Home = () => {
    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [welcome, setWelcome] = useState(true);
    const [error, setError] = useState(null); // guardo el error real

    useEffect(() => {
        const db = getFirestore();
        const productCollection = collection(db, "products");

        getDocs(productCollection)
        .then((snapshot) => {
            setProductsData(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        })
        .catch((err) => {
            console.error("Firestore error:", err); // <-- log para ver en consola
            setError(err.message);
        })
        .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setWelcome(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="homeStyles">
        {loading ? (
            <LoaderComponent />
        ) : error ? (
            <div>
            <p>Error: {error}</p> {/* ahora muestra la causa */}
            </div>
        ) : welcome ? (
            <div>
            <p className="font-46">Welcome</p>
            </div>
        ) : (
            <ItemListConteiner productsData={productsData} />
        )}
        </div>
    );
};

export default Home;