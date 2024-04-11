export const addCartItem = (cartItems, productId) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.productId === productId
    );

    if (existingCartItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingCartItemIndex].quantity += 1;
      return updatedCart;
    } else {
      const newItem = { productId, quantity: 1 };
      return [...cartItems, newItem];
    }
};

export const removeCartItem = (cartItems, productId) => {
    const existingCartItemIndex = cartItems.findIndex((cartItem) => cartItem.productId === productId);

    if (existingCartItemIndex !== -1 && cartItems[existingCartItemIndex].quantity > 1) {
        const updatedCart = cartItems.map((item) => {
            if (item.productId === productId) {
                return {...item, quantity: item.quantity -1};
            } else {
                return item;
            }
        });
        return updatedCart;
    } else if (
        existingCartItemIndex !== -1 && cartItems[existingCartItemIndex].quantity === 1
    ){
        const updateCart = cartItems.filter((item) => {
            return item.productId !== productId;
        }) 
        return updateCart
    } else {
        return;
    }
};

export const editCartItemQunatity = (cartItems, productId, newQuantity) => {
    const existingCartItemIndex = cartItems.findIndex((item) => {
        return item.productId === productId
    })

    if (existingCartItemIndex !== -1) {
        const updateCart = [...cartItems]
        updateCart[existingCartItemIndex].quantity = newQuantity
        return updateCart;
    } else {
        return cartItems;
    }
}