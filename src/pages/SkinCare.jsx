import "./page-css/SkinCare.css";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";
const SkinCare = () => {
    return (
        <div>
            <Header />
            <h2 className="titles">Skincare Collection</h2>
            <div className="Category-sect">
                <h2 className="titles">Cleansers</h2>
                <div className="product-scroll">
                    <CategoryFilter category={"Cleanser"} />
                </div>
                <h2 className="titles">Toners</h2>
                <div className="product-scroll">
                    <CategoryFilter category={"Toner"} />
                </div>
                <h2 className="titles">Serums</h2>
                <div className="product-scroll">
                    <CategoryFilter category={"Serum"} />
                </div>
                <h2 className="titles">Moisturizers</h2>
                <div className="product-scroll">
                    <CategoryFilter category={"Moisturizer"} />
                </div>
                <h2 className="titles">Fragrances</h2>
                <div className="product-scroll">
                    <CategoryFilter category={"Fragrance"} />
                </div>
                <Footer />
            </div>
        </div>

    );
}
export default SkinCare;