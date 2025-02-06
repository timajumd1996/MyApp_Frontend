import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import suta5 from '../images/suta5.webp';
import suta6 from '../images/suta6.webp';
import suta7 from '../images/suta7.webp';
import suta8 from '../images/suta8.webp';
import suta9 from '../images/suta9.webp';
import suta10 from '../images/suta10.webp';
import suta11 from '../images/suta11.webp';
import suta12 from '../images/suta12.webp';
import suta20 from '../images/suta20.webp';
import suta_new4 from '../images/suta_new4.webp';
import { addToCart, buyNow } from '../Redux/Action';
import { useDispatch } from 'react-redux';

const CottonSaree = () => {
    const dispatch = useDispatch();

    const cottonSarees = [
        { name: 'Ganda Phool', imgSrc: suta5, price: '2000' },
        { name: 'Udti Chidiyan', imgSrc: suta6, price: '2050' },
        { name: 'Tera Naina', imgSrc: suta7, price: '2200' },
        { name: 'Titli', imgSrc: suta8, price: '1800' },
        { name: 'Tose Naina', imgSrc: suta9, price: '2500' },
        { name: 'Shiuli Phool', imgSrc: suta10, price: '3000' },
        { name: 'Tere Khatir', imgSrc: suta11, price: '2850' },
        { name: 'Miss Kolkata', imgSrc: suta12, price: '3100' },
        { name: 'Madhabi Lata', imgSrc: suta20, price: '2650' },
        { name: 'Chandni Raat', imgSrc: suta_new4, price: '3800' },
    ];

    // Correcting to pass entire item object
    const handleAddToCart = (item) => {
        dispatch(addToCart(item)); // Dispatching the entire item
        console.log(`Add to Cart button clicked for ${item.name}`);
    };

    const handleBuyNow = (item) => {
        dispatch(buyNow(item)); // Dispatching the entire item
        console.log(`Buy Now button clicked for ${item.name}`);
    };

    return (
        <div>
            <Grid container spacing={5} justifyContent="center" className="cottonsaree-container">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Lavanya's Cotton Sarees
                    </Typography>
                </Grid>
                {cottonSarees.map((saree, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)', cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="400"
                                image={saree.imgSrc}
                                alt={saree.name}
                            />
                            <CardContent>
                                <Typography variant="h6">{saree.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    Price: Rs: {saree.price}
                                </Typography>
                                <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleAddToCart(saree)} // Pass the entire saree object
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleBuyNow(saree)} // Pass the entire saree object
                                    >
                                        Buy Now
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default CottonSaree;
