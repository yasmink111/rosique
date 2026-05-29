import "./page-css/OnSale.css";
import OnSaleCard from "../components/OnSaleCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SaleProducts } from "../data/products";
const OnSale = () => {
    return (
        <div>
            <Header />
            <h1 className="titles">On Sale</h1>

            <div className="scroll-poster">
                <OnSaleCard products={SaleProducts} />
            </div>

            <Footer />
        </div>
    );
}
export default OnSale;