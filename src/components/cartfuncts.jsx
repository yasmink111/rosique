const addToCart = (product) => {
    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];
    const existingProduct =
        cart.find(
            item => item.id === product.id
        );
    let updatedCart;
    if(existingProduct){
        updatedCart = cart.map(item =>
            item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1
            }
            : item
        );
    }
    else{
        updatedCart = [
            ...cart,
            {
                ...product,
                quantity: 1
            }
        ];
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
        new Event("cartUpdated")
    );
};

const removeFromCart = (id) => {
    const cart =
        JSON.parse(
            localStorage.getItem("cart")
        ) || [];

    const updatedCart =
        cart.filter(
            item => item.id !== id
        );

    localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
    );

    window.dispatchEvent(
        new Event("cartUpdated")
    );
};

const addToWishlist = (product) => {

    const wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    const exists =
        wishlist.find(
            item => item.id === product.id
        );

    if(!exists){
        wishlist.push(product);
        localStorage.setItem(
            "wishlist",
            JSON.stringify(wishlist)
        );
    }
};

const removeFromWishlist = (id) => {

    const wishlist =
        JSON.parse(
            localStorage.getItem("wishlist")
        ) || [];

    const updatedWishlist =
        wishlist.filter(
            item => item.id !== id
        );

    localStorage.setItem(
        "wishlist",
        JSON.stringify(updatedWishlist)
    );
};

export {
    addToCart,
    removeFromCart,
    addToWishlist,
    removeFromWishlist
};