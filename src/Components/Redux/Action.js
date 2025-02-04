export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const BUY_NOW = 'BUY_NOW';

export const addToCart = (sareeName) => ({
    type: ADD_TO_CART ,
    payload: sareeName
});

export const removeFromCart = (sareeName) => ({
    type: REMOVE_FROM_CART,
    payload: sareeName
});
export const buyNow = (sareeName) => ({
    type: BUY_NOW,
    payload: sareeName
});
