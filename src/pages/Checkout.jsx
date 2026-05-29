import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./page-css/Checkout.css";

const Checkout = () => {
    const navigate = useNavigate();

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const itemsTotal = cartItems.reduce(
        (total, item) =>
            total + (item.salePrice || item.price) * item.quantity,
        0
    );

    const [fullName, setFullName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const placeOrder = () => {
        if (
            !fullName ||
            !address ||
            !city ||
            !phone ||
            !cardNumber ||
            !expiry ||
            !cvv
        ) {
            alert("Please fill all fields.");
            return;
        }

        localStorage.removeItem("cart");

        alert("Order placed successfully");
        navigate("/");
    };

    const shipping = 10;
    const total = itemsTotal + shipping;

    return (
        <>
            <Header />

            <div className="checkout-container">
                <div className="checkout-form">
                    <h2>Shipping Details</h2>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <h2>Payment</h2>

                    <input
                        type="text"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />

                    <div className="row">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>

                    <button onClick={placeOrder}>
                        Place Order
                    </button>
                </div>

                <div className="checkout-summary">
                    <h2>Order Summary</h2>

                    <p>Items: ${itemsTotal.toFixed(2)}</p>

                    <p>Shipping: ${shipping.toFixed(2)}</p>

                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Checkout;