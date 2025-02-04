import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import office1 from '../images/office1.webp';
import office2 from '../images/office2.webp';
import office3 from '../images/office3.webp';
import office4 from '../images/office4.webp';
import office5 from '../images/office5.webp';
import office6 from '../images/office6.webp';
import office7 from '../images/office7.webp';
import office8 from '../images/office8.webp';
import office9 from '../images/office9.webp';
import office10 from '../images/office10.webp';
import { addToCart } from '../Redux/Action';
import { buyNow } from '../Redux/Action';
import { useDispatch } from 'react-redux';



const OfficeWear = () => {

    const dispatch = useDispatch();

    // const { addClicked, buyNowClicked } = props;

    const officeWearSarees = [
        { name: 'Office Wear 1', imgSrc: office1, price: '2000' },
        { name: 'Office Wear 2', imgSrc: office2, price: '2050' },
        { name: 'Office Wear 3', imgSrc: office3, price: '2200' },
        { name: 'Office Wear 4', imgSrc: office4, price: '1800' },
        { name: 'Office Wear 5', imgSrc: office5, price: '2500' },
        { name: 'Office Wear 6', imgSrc: office6, price: '3000' },
        { name: 'Office Wear 7', imgSrc: office7, price: '2850' },
        { name: 'Office Wear 8', imgSrc: office8, price: '3100' },
        { name: 'Office Wear 9', imgSrc: office9, price: '2650' },
        { name: 'Office Wear 10', imgSrc: office10, price: '3800' },
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
            <Grid container spacing={5} justifyContent="center" className="officewear-container">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Lavanya's Office Wear
                    </Typography>
                </Grid>
                {officeWearSarees.map((saree, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)', cursor: 'pointer' }}>
                            <CardMedia
                                component="img"
                                height="600"
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

export default OfficeWear;






















