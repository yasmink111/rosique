import Header from "../components/Header";
import Footer from "../components/Footer";

import "./page-css/Brands.css";

import { useNavigate } from "react-router-dom";

const Brands = () => {
    const navigate = useNavigate();

    const brands = [
        "Giorgio Armani Beauty",
        "Huda Beauty",
        "Charlotte Tilbury",
        "Chanel Beauty",
        "Dior Beauty",
        "Gucci Beauty",
        "Haus Labs",
        "NARS",
        "Lancôme",
        "e.l.f. Cosmetics",
        "REFY",
        "Benefit Cosmetics",
        "Anastasia Beverly Hills",
        "Bioderma",
        "Glow Recipe",
        "Kérastase",
        "Sol de Janeiro"
    ];

    return (
        <div>
            <Header />

            <div className="brands-page">
                <h1>Our Brands</h1>

                <div className="brands">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="brand"
                            onClick={() =>
                                navigate(
                                    `/brands/${brand
                                        .toLowerCase()
                                        .replace(/\s+/g, "")}`
                                )
                            }
                        >
                            {brand}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Brands;