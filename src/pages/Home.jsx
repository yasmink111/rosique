import Footer from "../components/Footer";
import Header from "../components/Header";
import Button from "../components/Button";
import "./page-css/Home.css";
import ProductCard from "../components/ProductCard";
import BrandCard from "../components/BrandCard";
import OnSaleCard from "../components/OnSaleCard";
import SideMenu from "../components/SideMenu";
import { useNavigate } from "react-router-dom";
import { SaleProducts } from "../data/products";
import { buyMoreProducts } from "../data/products";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />

      <div className="scroll-poster">
        <BrandCard />
      </div>

      <div className="view-all">
        <h3>We've got it all!</h3>
        <p>
          Explore over 50 known brands from all over the globe.
          From perfumes and makeup to skincare and hair products,
          discover your next beauty favorite today.
        </p>

        <Button text={"View all Brands"} bgcolor={"#800020"} tcolor={"#ffff"} onClick={() => navigate("./Brands")} />

      </div>
      <h2 className="titles">On Sale</h2>
      <div className="scroll-poster">

        <OnSaleCard products={SaleProducts} />

      </div>
      <div className="bttn">
        <Button text={"View all Items"} bgcolor={"#800020"} tcolor={"#ffff"} onClick={() => navigate("./OnSale")} />
      </div>
      <h2 className="titles">Buy More, Pay Less</h2>
      <div className="scroll-poster">

        <OnSaleCard products={buyMoreProducts} />
      </div>

      <Footer />
    </div>

  );
}

export default Home;