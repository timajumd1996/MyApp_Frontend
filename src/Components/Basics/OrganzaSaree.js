import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid, Button } from '@mui/material';
import organza1 from '../images/organza1.webp';
import organza2 from '../images/organza2.jpeg';
import organza3 from '../images/organza3.webp';
import organza4 from '../images/organza4.webp';
import organza5 from '../images/organza5.jpeg';
import organza6 from '../images/organza6.jpeg';
import organza7 from '../images/organza7.jpg';
import organza8 from '../images/organza8.jpg';
import organza9 from '../images/organza9.jpg';
import organza10 from '../images/organza10.webp';
import { addToCart } from '../Redux/Action';
import { buyNow } from '../Redux/Action';
import { useDispatch } from 'react-redux';


const OrganzaSaree = () => {

    const dispatch = useDispatch();
    

    const organzaSarees = [
    { name: 'Laal Ishque', imgSrc: organza1, price: '2000' },
    { name: 'Tumi Amar', imgSrc: organza2, price: '2050' },
    { name: 'Megh Dol', imgSrc: organza3, price: '2200' },
    { name: 'Shadi Hai', imgSrc: organza4, price: '1800' },
    { name: 'Rokto Joba', imgSrc: organza5, price: '2500' },
    { name: 'Laal Phool', imgSrc: organza6, price: '3000' },
    { name: 'Laal Golap', imgSrc: organza7, price: '2850' },
    { name: 'Laal Pan', imgSrc: organza8, price: '3100' },
    { name: 'Sada Megh', imgSrc: organza9, price: '2650' },
    { name: 'Miss Chandni', imgSrc: organza10, price: '3800' },
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
            <Grid container spacing={5} justifyContent="center" className="organza-container">
                <Grid item xs={12}>
                    <Typography variant="h4" align="center" gutterBottom>
                        Lavanya's Organza Sarees
                    </Typography>
                </Grid>
                {organzaSarees.map((saree, index) => (
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

export default OrganzaSaree;
