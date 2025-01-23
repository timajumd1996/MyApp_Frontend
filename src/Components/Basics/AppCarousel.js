import React from 'react';
import suta_new from '../images/suta_new.webp';
import suta_new2 from '../images/suta_new2.webp';
import suta_new4 from '../images/suta_new4.webp';
import '../css/carousel.css';
// import { WidthFull } from '@mui/icons-material';

const AppCarousel = () => {
    return (
        <div>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">

                        <img src={suta_new} alt='myapp' style={{

                            width: '100%'
                        }} />

                    </div>
                    <div className="carousel-item">
                        <img src={suta_new2} alt='myapp' style={{

                            width: '100%'
                        }} />

                    </div>
                    <div className="carousel-item">
                        <img src={suta_new4} alt='myapp' style={{

                            width: '100%'
                        }} />

                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default AppCarousel;