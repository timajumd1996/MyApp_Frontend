import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import suta1 from '../images/suta1.webp';
import suta2 from '../images/suta2.webp';
import suta4 from '../images/suta4.webp';
import '../css/carousel.css';

const About = () => {
    return (

        <div className='about-container'>
            <h2 className='aboutUs'>About Us:</h2><br/>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={10}>

                    {/* Section 1 */}
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <img src={suta1} alt="about1" style={{ maxHeight: '100vh'  }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1" style={{ fontSize: 20 }}>
                                        <u><b>Our Vision:</b><br /></u>
                                        Lavanya is the most humble product we meet and live with every day. It means thread. Lavanya were elated when they discovered the magic of the syllables in their names. Su and Ta always had a special liking for the countless and varied forms of art and culture across India. Even after spending many years in the corporate world, their passion never abated. Thus in 2016, fighting many odds, Lavanya was born.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    {/* Section 2 */}
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1" style={{ fontSize: 20 }}>
                                        <u><b>Our Mision:</b><br /></u>
                                        The brand LAVANYA is a fresh design house that centers on creating a range of attire with a blend of tradition and contemporaneity. Lavanya crafted inspirations pay attention to details and the designs add elegance, boldness, and grace. Lavanya is a reminder of the craft traditions of India, offering novelty each time it is experienced.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <img src={suta2} alt="about2" style={{ maxHeight: '100vh' }} />
                        </Grid>
                    </Grid>

                    {/* Section 3 */}
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} sm={6}>
                            <img src={suta4} alt="about3" style={{ maxHeight: '100vh'  }} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Card>
                                <CardContent>
                                    <Typography variant="body1" style={{ fontSize: 20 }}>
                                        <u><b>Our Promise:</b><br /></u>
                                        Lavanya celebrates raw threads, traditional boldness, and uninterrupted simplicity. Each design is unique, inspired by the artisans' ancestral weaving processes. Lavanya salutes their craftsmanship, aspiring to keep the undying spirit of artistry alive.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>

    );
};

export default About;

