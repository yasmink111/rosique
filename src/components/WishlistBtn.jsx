import { useEffect, useState } from "react";

import "./comp-css/WishlistBtn.css";

function WishlistBtn({ product }) {

    const [isWishlisted, setIsWishlisted] =
        useState(false);

    useEffect(() => {

        const wishlist =
            JSON.parse(
                localStorage.getItem("wishlist")
            ) || [];

        const exists =
            wishlist.some(
                item => item.id === product.id
            );

        setIsWishlisted(exists);

    }, [product.id]);

    function toggleWishlist() {

        let wishlist =
            JSON.parse(
                localStorage.getItem("wishlist")
            ) || [];

        const exists =
            wishlist.some(
                item => item.id === product.id
            );

        if (exists) {

            wishlist =
                wishlist.filter(
                    item => item.id !== product.id
                );

            setIsWishlisted(false);

        } else {

            wishlist.push(product);

            setIsWishlisted(true);
        }

        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );

        window.dispatchEvent(
            new Event("wishlistUpdated")
        );
    }

    useEffect(() => {

        function syncWishlist() {

            const wishlist =
                JSON.parse(
                    localStorage.getItem("wishlist")
                ) || [];

            const exists =
                wishlist.some(
                    item => item.id === product.id
                );

            setIsWishlisted(exists);
        }

        window.addEventListener(
            "wishlistUpdated",
            syncWishlist
        );

        return () => {

            window.removeEventListener(
                "wishlistUpdated",
                syncWishlist
            );
        };

    }, [product.id]);

    return (

        <button
            className="wishlist-btn"
            onClick={toggleWishlist}
        >

            {isWishlisted ? "❤" : "♡"}

        </button>
    );
}

export default WishlistBtn;