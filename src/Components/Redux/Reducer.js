import { ADD_TO_CART, REMOVE_FROM_CART, BUY_NOW } from "./Action";

const initialState = {
    cart: [],
    orders: [] // To store purchased items
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.log('Item added:', action.payload);
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };

        case REMOVE_FROM_CART:
            console.log('Item removed:', action.payload);
            return {
                ...state,
                cart: state.cart.filter((item) => item !== action.payload),
            };

        case BUY_NOW:
            console.log('Buy Now:', action.payload);
            return {
                ...state,
                orders: [...state.orders, action.payload], // Move item to orders
                cart: state.cart.filter((item) => item !== action.payload) // Remove item from cart
            };

        default:
            return state;
    }
};

export default cartReducer;
