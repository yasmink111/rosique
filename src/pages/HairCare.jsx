import "./page-css/SkinCare.css";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HairCare = () => {
    return (
        <div>
            <Header />

            <h2 className="title">Hair Care Collection</h2>

            <div className="Category-sect">
                <h2 className="titles">Oils</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Oil" />
                </div>

                <h2 className="titles">Shampoos</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Shampoo" />
                </div>

                <h2 className="titles">Masks</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Mask" />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default HairCare;