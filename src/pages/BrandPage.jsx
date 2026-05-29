import { useNavigate, useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import { products } from "../data/products";

import "./page-css/BrandPage.css";

const BrandPage = () => {
    const navigate = useNavigate();
    const { brandName } = useParams();

    const filteredProducts =
        products.filter(product =>

            product.brand
                .toLowerCase()
                .replace(/\s+/g, "")

            ===

            brandName.toLowerCase().replace(/\s+/g,"")
        );
    const realBrandName =
        filteredProducts[0]?.brand || brandName;
    return (

        <div>

            <Header />

            <div className="brand-page">

                <div className="brand-hero">
                    <button
                        className="back-btn"
                        onClick={() => navigate("/Brands")}
                    >
                        ← Back To Brands
                    </button>
                    <h1>
                        {realBrandName}
                    </h1>

                    <p>
                        Discover products from {realBrandName}
                    </p>

                </div>

                <div className="brand-products">

                    {filteredProducts.map(product => (

                        <ProductCard
                            key={product.id}
                            product={product}
                        />

                    ))}

                </div>

            </div>

            <Footer />

        </div>
    );
};

export default BrandPage;