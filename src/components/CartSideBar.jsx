import { useNavigate } from "react-router-dom";
import "./comp-css/CartSide.css";

const CartSidebar = ({ open, setOpen, cartItems, setCartItems }) => {
    const navigate = useNavigate();

    const updateCart = (updatedCart) => {
        setCartItems(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const removeItem = (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        updateCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map(item =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        updateCart(updatedCart);
    };

    const moveToWishlist = (product) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
        const exists = wishlist.find(item => item.id === product.id);

        if (!exists) {
            wishlist.push(product);
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
        }

        removeItem(product.id);
    };

    const goToCheckout = () => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser) {
            alert("Please login before checkout.");
            navigate("/login");
            return;
        }

        navigate("/checkout");
    };

    const totalPrice = cartItems.reduce(
        (total, item) => total + (item.salePrice || item.price) * item.quantity,
        0
    );

    return (
        <>
            {open && (
                <div className="cart-overlay" onClick={() => setOpen(false)}></div>
            )}

            <div className={`cart-sidebar ${open ? "open" : ""}`}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-cart" onClick={() => setOpen(false)}>
                        ✕
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-products">
                            {cartItems.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <img src={item.image} alt={item.name} />

                                    <div className="cart-info">
                                        <h3>{item.name}</h3>
                                        <p>{item.brand}</p>
                                        <span>${(item.salePrice || item.price).toFixed(2)}</span>

                                        <div className="quantity-controls">
                                            <button onClick={() => decreaseQuantity(item.id)}>−</button>
                                            <p>{item.quantity}</p>
                                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                                        </div>

                                        <button
                                            className="move-btn"
                                            onClick={() => moveToWishlist(item)}
                                        >
                                            Move To Wishlist ♡
                                        </button>
                                    </div>

                                    <button
                                        className="remove-item"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="cart-footer">
                            <h3>Total: ${totalPrice.toFixed(2)}</h3>

                            <button className="checkout-btn" onClick={goToCheckout}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartSidebar;