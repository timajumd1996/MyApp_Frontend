import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import readytowear1 from '../images/readytowear1.webp';
import readytowear2 from '../images/readytowear2.webp';
import readytowear3 from '../images/readytowear3.webp';
import readytowear4 from '../images/readytowear4.webp';
import readytowear5 from '../images/readytowear5.webp';
import readytowear6 from '../images/readytowear6.webp';
import readytowear7 from '../images/readytowear7.webp';
import readytowear8 from '../images/readytowear8.webp';
import readytowear9 from '../images/readytowear9.webp';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Action';
import { buyNow } from '../Redux/Action';



const ReadytoWear = () => {

    const dispatch = useDispatch();
   

    const readyToWearSarees = [
        { name: 'Megh Balika', imgSrc: readytowear1, price: '2000' },
        { name: 'Sitara', imgSrc: readytowear2, price: '2050' },
        { name: 'Echee Dana', imgSrc: readytowear3, price: '2200' },
        { name: 'Kali Ankhe', imgSrc: readytowear4, price: '1800' },
        { name: 'Gulabi Ankhe', imgSrc: readytowear5, price: '2500' },
        { name: 'Rupali Mon', imgSrc: readytowear6, price: '3000' },
        { name: 'Palak', imgSrc: readytowear7, price: '2850' },
        { name: 'Kochu Pata', imgSrc: readytowear8, price: '3100' },
        { name: 'Oh My Love', imgSrc: readytowear9, price: '2650' },
    ];

    const handleAddToCart = (sareeName) => {
       dispatch(addToCart(sareeName));
        console.log(`Add to Cart button clicked for ${sareeName}`);
    };

    const handleBuyNow = (sareeName) => {
        dispatch(buyNow(sareeName));
        console.log(`Buy Now button clicked for ${sareeName}`);
    };

    return (
        <div>
            <Grid container spacing={5} justifyContent="center" className="readytowear-container">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Lavanya's Ready to Wear
                    </Typography>
                </Grid>
                {readyToWearSarees.map((saree, index) => (
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
                                        onClick={() => handleAddToCart(saree.name)}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleBuyNow(saree.name)}
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

export default ReadytoWear;
