import "./comp-css/BrandCard.css";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import {brandCards} from "../data/products";
function BrandCard() {
    const navigate = useNavigate();
    return (
        <>
        {brandCards.map((card) => (
            <div
                className="brand-card"
                key={card.id}
                style={{
                    backgroundColor:card.bgcolor
                }}
            >
                <img
                    src={card.image}
                    alt={card.name}
                />
                <div className="BC-info">
                    <h3>{card.name}</h3>
                    <p>{card.description}</p>
                    <div className="BC-btn">
                        <Button
                            text={"View Brand"}
                            bgcolor={card.bgcolor}
                            tcolor={"#800020"}
                            onClick={() => navigate( `/brands/${card.name.toLowerCase().replace(/\s+/g, "")}`)}
                        />
                    </div>
                </div>
            </div>
        ))}
        </>
    );
}

export default BrandCard;