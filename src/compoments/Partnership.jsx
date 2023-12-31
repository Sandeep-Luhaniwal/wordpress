import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import Image1 from '../assets/Images/png/yahoo.png'
import Image2 from '../assets/Images/png/yahoo_finace.png'
import Image3 from '../assets/Images/png/yahoo.png'
import Image4 from '../assets/Images/png/Trading.png'
import Image5 from '../assets/Images/png/yahoo_life.png'
import Image6 from '../assets/Images/png/Trading.png'



const Partnership = () => {
    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 0,
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        pouseonhover: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <section className='bg_heading'>
                <Container className='position-relative overflow-hidden'>
                    <div className='py-40 py-sm-60 py-md-80 py-lg-105'>
                        <h2 className='mb-0 ff_secondary fs_4xl color_black fw_regular pb-30 pb-sm-40 pb-md-55 pb-lg-70'>Featured on</h2>
                        <Slider {...settings} className='op-hover d-flex align-items-center'>
                            <div className='px-3 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image1} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image2} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image3} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image4} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image5} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image6} alt="bitcoin" />
                            </div>
                            <div className='px-3 d-flex justify-content-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image4} alt="bitcoin" />
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Partnership