import Button from "./Button";
import "./cartfuncts";
import "./comp-css/OnSaleCard.css";
import "./CartSideBar";
import WishListBtn from "./WishlistBtn";
import { addToCart } from "./cartfuncts";
const OnSaleCard = ({ products }) => {
    return (
        <>
            {products.map((card) => (

                <div
                    className="sale-card"
                    style={{
                        borderColor: card.borderColor
                    }}
                    key={card.id}
                >

                    <WishListBtn product={card} />

                    <img
                        src={card.image}
                        alt={card.name}
                    />

                    <h3>{card.name}</h3>

                    <p className="sale-brand">
                        {card.brand}
                    </p>

                    <p>{card.description}</p>

                    <span className="bprice">
                        ${card.price.toFixed(2)}
                    </span>

                    <span className="sale-price">
                        ${card.salePrice.toFixed(2)}
                    </span>

                    <Button
                        text={"Add To Cart"}
                        bgcolor={"#d8b4b8"}
                        tcolor={"#4a1f2c"}
                        onClick={() => addToCart(card)}
                    />

                </div>

            ))}

        </>
    );
}

export default OnSaleCard;