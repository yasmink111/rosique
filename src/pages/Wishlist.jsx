import { useEffect, useState } from "react";
import "./page-css/Wishlist.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { addToCart } from "../components/cartfuncts";

const Wishlist=() =>{
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const validWishlist = savedWishlist.filter(item => item && item.id);

        setWishlist(validWishlist);
    }, []);

    function removeWishlist(id) {
        const updatedWishlist = wishlist.filter(item => item.id !== id);

        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        window.dispatchEvent(new Event("wishlistUpdated"));
    }

    return (
        <div>
            <Header />

            <div className="wishlist-page">
                <h1>My Wishlist</h1>

                {wishlist.length === 0 ? (
                    <p className="empty-message">
                        Your wishlist is empty ♡
                    </p>
                ) : (
                    <div className="wishlist-items">
                        {wishlist.map(item => (
                            <div className="wishlist-item" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="wishlist-img"
                                />

                                <div className="wishlist-info">
                                    <h2>{item.name}</h2>

                                    <p className="wishlist-brand">
                                        {item.brand}
                                    </p>

                                    <p className="wishlist-price">
                                        ${item.price}
                                    </p>

                                    <div className="wishlist-actions">
                                        <button
                                            className="cart-btn"
                                            onClick={() => {
                                                addToCart(item);
                                                removeWishlist(item.id);
                                            }}
                                        >
                                            Add To Cart
                                        </button>

                                        <button
                                            className="remove-btn"
                                            onClick={() => removeWishlist(item.id)}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}

export default Wishlist;