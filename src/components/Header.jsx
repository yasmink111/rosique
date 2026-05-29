import { useEffect, useState } from "react";

import logo from "../images2/logo.png";

import "./comp-css/Header.css";

import SideMenu from "./SideMenu";

import Search from "./Search";

import CartSidebar from "./CartSideBar";
import"./cartfuncts";
import Button from "./Button";

const Header = () => {

    const [searchOpen, setSearchOpen] =
        useState(false);

    const [cartOpen, setCartOpen] =
        useState(false);

    const [cartItems, setCartItems] =
        useState([]);

    const [cartCount, setCartCount] =
        useState(0);

    useEffect(() => {

        const savedCart =
            JSON.parse(
                localStorage.getItem("cart")
            ) || [];

        setCartItems(savedCart);

        setCartCount(savedCart.length);

    }, []);

    useEffect(() => {

        const updateCart = () => {

            const updatedCart =
                JSON.parse(
                    localStorage.getItem("cart")
                ) || [];

            setCartItems(updatedCart);

            setCartCount(updatedCart.length);
        };

        window.addEventListener(
            "cartUpdated",
            updateCart
        );

        return () => {

            window.removeEventListener(
                "cartUpdated",
                updateCart
            );
        };

    }, []);

    const toggleSearch = () => {

        setSearchOpen(!searchOpen);

        if(cartOpen){
            setCartOpen(false);
        }
    };

    const toggleCart = () => {

        setCartOpen(!cartOpen);

        if(searchOpen){
            setSearchOpen(false);
        }
    };

    return (

        <div>

            <div className="banner">
                Welcome to Rosique Beauty!
            </div>

            <header className="header">

                <SideMenu />

                <img
                    src={logo}
                    alt="Rosique Logo"
                    className="logo"
                />

                <div className="header-icons">

                    <Button
                        text={"🔍"}
                        bgcolor={"transparent"}
                        tcolor={"#800020"}
                        onClick={toggleSearch}
                    />

                    <div
                        className="cart-icon-wrapper"
                        onClick={toggleCart}
                    >

                        <Button
                            text={"🛒"}
                            bgcolor={"transparent"}
                            tcolor={"#800020"}
                        />

                        {cartCount > 0 && (

                            <div className="cart-count">

                                {cartCount}

                            </div>

                        )}

                    </div>

                </div>

            </header>

            <Search
                searchOpen={searchOpen}
                setSearchOpen={setSearchOpen}
            />

            <CartSidebar
                open={cartOpen}
                setOpen={setCartOpen}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />

        </div>
    );
};

export default Header;