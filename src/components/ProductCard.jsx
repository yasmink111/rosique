import "./comp-css/ProductCard.css";

import Button from "./Button";
import WishlistBtn from "./WishlistBtn";
import { addToCart } from "./cartfuncts";

const ProductCard = ({ product }) => {
    return (
        <div className="card">

            <WishlistBtn product={product} />

            <img
                src={product.image}
                alt={product.name}
                className="product-image"
            />

            <div className="product-info">

                <h2>{product.name}</h2>

                <p className="brand-name">
                    {product.brand}
                </p>

                <div className="price-container">

    {product.salePrice !== undefined ? (

        <>
            <p className="old-price">
                ${product.price}
            </p>

            <p className="sale-price">
                ${product.salePrice}
            </p>
        </>

    ) : (

        <p className="price">
            ${product.price}
        </p>

    )}

</div>

                <Button
                    text={"Add To Cart"}
                    bgcolor={"#d8b4b8"}
                    tcolor={"#800020"}
                    onClick={() => addToCart(product)}
                />

            </div>
        </div>
    );
};

export default ProductCard;