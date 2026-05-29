import { useState } from "react";

import { products } from "../data/products";

import ProductCard from "./ProductCard";

import "./comp-css/Search.css";

const Search = ({
    searchOpen,
    setSearchOpen
}) => {

    const [searchTerm, setSearchTerm] =
        useState("");

    const filteredProducts =
        products.filter(product =>

            (product.name || "")
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )

            ||

            (product.brand || "")
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )

            ||

            (product.type || "")
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
        );

    return (

        <>

            {searchOpen && (

                <div
                    className="search-overlay"
                    onClick={() =>
                        setSearchOpen(false)
                    }
                ></div>

            )}

            <div
                className={`search-sidebar ${searchOpen
                        ? "open"
                        : ""
                    }`}
            >

                <div className="search-header">

                    <h2>Search</h2>

                    <button
                        className="close-search"
                        onClick={() =>
                            setSearchOpen(false)
                        }
                    >
                        ✕
                    </button>

                </div>

                <input
                    type="text"
                    placeholder="Search products, brands..."
                    className="search-input"
                    value={searchTerm}
                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }
                />

                <div className="search-results">

                    {filteredProducts.length > 0 ? (

                        filteredProducts.map(product => (

                            <ProductCard
                                key={product.id}
                                product={product}
                            />

                        ))

                    ) : (

                        <p className="no-results">
                            No products found ✨
                        </p>

                    )}

                </div>

                <div className="search-footer">
                    {filteredProducts.length} Products Found
                </div>

            </div>

        </>

    );
};

export default Search;