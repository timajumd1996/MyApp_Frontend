import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button, IconButton, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// ✅ Ensure correct import path for Redux actions
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../Redux/Action';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart || []); // Ensure cart is always an array

    // ✅ Fix: Ensure total price calculation handles undefined values
    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const price = parseFloat(item?.price) || 0; // Ensure price is a valid number
            const quantity = item?.quantity || 1; // Default quantity to 1 if undefined
            return total + price * quantity;
        }, 0).toFixed(2);
    };

    return (
        <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 2 }}>Shopping Cart</Typography>

            {cart.length === 0 ? (
                <Typography variant="h6" sx={{ textAlign: 'center', color: 'gray' }}>
                    Your cart is empty.
                </Typography>
            ) : (
                cart.map((item, index) => ( // ✅ Use index as fallback key
                    <Card key={item.id || index} sx={{ marginBottom: 2, padding: 1 }}>
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box>
                                <Typography variant="h6">{item.name || "Unnamed Item"}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Rs- {item.price ? parseFloat(item.price).toFixed(2) : "0.00"}
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton 
                                    onClick={() => dispatch(decreaseQuantity(item.id))} 
                                    disabled={!item.quantity || item.quantity <= 1} // ✅ Prevents errors if quantity is missing
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <Typography variant="body1">{item.quantity || 1}</Typography>
                                <IconButton onClick={() => dispatch(increaseQuantity(item.id))}>
                                    <AddIcon />
                                </IconButton>
                            </Box>
                            <IconButton onClick={() => dispatch(removeFromCart(item.id))} color="error">
                                <DeleteIcon />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))
            )}

            {cart.length > 0 && (
                <Box sx={{ textAlign: 'center', marginTop: 3 }}>
                    <Typography variant="h6">Total: Rs- {getTotalPrice()}</Typography>
                    <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Checkout</Button>
                </Box>
            )}
        </Box>
    );
};

export default Cart;
