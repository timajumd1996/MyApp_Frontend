import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import party2 from '../images/party2.webp';
import party3 from '../images/party3.webp';
import party4 from '../images/party4.webp';
import party5 from '../images/party5.webp';
import party6 from '../images/party6.webp';
import party7 from '../images/party7.webp';
import party8 from '../images/party8.webp';
import party9 from '../images/party9.webp';
import party10 from '../images/party10.webp';
import { addToCart } from '../Redux/Action';
import { buyNow } from '../Redux/Action';
import { useDispatch } from 'react-redux';



const PartyWear = () => {

    const dispatch = useDispatch();

    const partyWearSarees = [
        { name: 'Chikni Chamili', imgSrc: party2, price: '10000' },
        { name: 'Purple Love', imgSrc: party3, price: '5050' },
        { name: 'Diwali Diya', imgSrc: party4, price: '6200' },
        { name: 'Dhaker Saj', imgSrc: party5, price: '11000' },
        { name: 'Pujar Saj', imgSrc: party6, price: '6500' },
        { name: 'Sharmili', imgSrc: party7, price: '5000' },
        { name: 'Sajbo Jotone', imgSrc: party8, price: '8850' },
        { name: 'Phool Kali', imgSrc: party9, price: '7100' },
        { name: 'Suktara', imgSrc: party10, price: '8650' },
    ];
    

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        console.log(`Add to Cart button clicked for ${item.name}`);
    };

    const handleBuyNow = (item) => {
        dispatch(buyNow(item));
        console.log(`Buy Now button clicked for ${item.name}`);
    };

    return (
        <div>
            <Grid container spacing={5} justifyContent="center" className="partywear-container">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Lavanya's Party Wear
                    </Typography>
                </Grid>
                {partyWearSarees.map((saree, index) => (
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
                                        onClick={() => handleAddToCart(saree)}
                                    >
                                        Add to Cart
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleBuyNow(saree)}
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

export default PartyWear;
