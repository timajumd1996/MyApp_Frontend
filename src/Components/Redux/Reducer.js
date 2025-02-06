import { ADD_TO_CART, REMOVE_FROM_CART, BUY_NOW, INCREASE_QUANTITY, DECREASE_QUANTITY } from "./Action";

const initialState = {
    cart: [],
    orders: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: state.cart.some(item => item.id === action.payload.id) //.some(): A JavaScript array method that checks if the item already exists in the cart.

                    ? state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item //If item.id === action.payload.id: The matching item has its quantity increased by 1

                    )
                    : [...state.cart, { ...action.payload, quantity: 1 }]  //{ ...action.payload, quantity: 1 }: AIf the item does not exist, it is added to the cart with quantity: 1.
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        case INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };

        case DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };

        case BUY_NOW:
            return {
                ...state,
                orders: [...state.orders, state.cart.find(item => item.id === action.payload)],
                cart: state.cart.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

export default cartReducer;
