import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./comp-css/SideMenu.css";

function SideMenu() {
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    return (
        <>
            <button
                className="menu-btn"
                onClick={() => setOpen(true)}
            >
                ☰
            </button>

            {open && (
                <div
                    className="menu-overlay"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            <div className={`side-menu ${open ? "open" : ""}`}>
                <div className="menu-header">
                    <h2>Menu</h2>
                    <button
                        className="close-btn"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                </div>

                <div className="content">
                    <p onClick={() => navigate("/")}>Home</p>
                    <p onClick={() => navigate("/MyAccount")}>My Account</p>
                    <p onClick={() => navigate("/AboutUs")}>About Us</p>
                    <p onClick={() => navigate("/onSale")}>On Sale</p>
                    <p onClick={() => navigate("/brands")}>Brands</p>
                    <p onClick={() => navigate("/Makeup")}>Makeup</p>
                    <p onClick={() => navigate("/Skincare")}>Skincare</p>
                    <p onClick={() => navigate("/Haircare")}>Haircare</p>
                    <p onClick={() => navigate("/Contact")}>Contact</p>
                    <p onClick={() => navigate("/Register")}>Register</p>
                    <p onClick={() => navigate("/Login")}>Login</p>
                    <p onClick={() => navigate("/Wishlist")}>Wishlist</p>

                </div>
                <div className="menu-footer">
                </div>
            </div>

        </>

    );
}

export default SideMenu;