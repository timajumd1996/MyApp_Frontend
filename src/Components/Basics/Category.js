import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import suta5 from '../images/suta5.webp';
import office1 from '../images/office1.webp';
import readytowear1 from '../images/readytowear1.webp';
import party2 from '../images/party2.webp';
import organza1 from '../images/organza1.webp';
import { useNavigate } from 'react-router-dom';
import '../css/carousel.css';

const categories = [
    { name: 'Cotton Saree', imgSrc: suta5, description: 'Elegant cotton sarees for all occasions.', url: '/CottonSaree' },
    { name: 'Office Wear', imgSrc: office1, description: 'Stylish sarees for professional settings.', url: '/OfficeWear' },
    { name: 'Ready to Wear', imgSrc: readytowear1, description: 'Pre-stitched sarees for convenience.', url: '/ReadytoWear' },
    { name: 'Party Wear', imgSrc: party2, description: 'Glamorous sarees for special events.', url: '/PartyWear' },
    { name: 'Organza Saree', imgSrc: organza1, description: 'Delicate organza sarees with a modern touch.', url: '/OrganzaSaree' },
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <Grid container direction="row" spacing={4} className="category" justifyContent="center">
            <Grid item>
                <Typography variant="h4" align="center" gutterBottom>
                    Category:
                </Typography>
            </Grid>
            <Grid container spacing={5} justifyContent="center" alignItems="flex-start" className="category-container">
                {categories.map((category, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Card
                            onClick={() => navigate(category.url)}
                            style={{ cursor: 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
                        >
                            <CardMedia
                                component="img"
                                height="600"
                                image={category.imgSrc}
                                alt={category.name}
                            />
                            
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {category.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {category.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default Category;
