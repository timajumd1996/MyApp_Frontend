// Action Types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const BUY_NOW = 'BUY_NOW';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

// Action Creators

// Add item to cart (passes the full item object)
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item // Here, `item` should be an object like { id, name, price, quantity }
});

// Remove item from cart (passes the item id)
export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId // Here, `itemId` is the unique identifier for the item
});

// Buy item now (passes the item id)
export const buyNow = (itemId) => ({
    type: BUY_NOW,
    payload: itemId
});

// Increase quantity of an item (passes the item id)
export const increaseQuantity = (itemId) => ({
    type: INCREASE_QUANTITY,
    payload: itemId
});

// Decrease quantity of an item (passes the item id)
export const decreaseQuantity = (itemId) => ({
    type: DECREASE_QUANTITY,
    payload: itemId
});
