import "./page-css/Makeup.css";
import CategoryFilter from "../components/CategoryFilter";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Makeup = () => {
    return (
        <div>
            <Header />

            <h2 className="titles">Makeup Collection</h2>

            <div className="Category-sect">
                <h2 className="title">Foundations</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Foundation" />
                </div>

                <h2 className="title">Concealers</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Concealer" />
                </div>

                <h2 className="title">Blushes</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Blush" />
                </div>

                <h2 className="title">Bronzers</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Bronzer" />
                </div>

                <h2 className="title">Highlighters</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Highlighter" />
                </div>

                <h2 className="title">Brows</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Brows" />
                </div>

                <h2 className="title">Powders</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Powder" />
                </div>

                <h2 className="title">Eye Shadows</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Eyes" />
                </div>

                <h2 className="title">Mascaras</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Mascara" />
                </div>

                <h2 className="title">Lips</h2>
                <div className="product-scroll">
                    <CategoryFilter category="Lips" />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Makeup;