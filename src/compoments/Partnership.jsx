import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import bitcoin from '../assets/Images/png/yahoo.png'
import litecoin from '../assets/Images/png/yahoo.png'
import tezos from '../assets/Images/png/yahoo.png'
import ethereum from '../assets/Images/png/yahoo.png'
import chainLink from '../assets/Images/png/yahoo.png'
import ton from '../assets/Images/png/yahoo.png'



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
                breakpoint: 360,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    return (
        <>
            <Container className='position-relative overflow-hidden'>
                <div>
                    <Slider {...settings} className='op-hover d-flex align-items-center'>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={bitcoin} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={litecoin} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ton} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ethereum} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={chainLink} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={tezos} alt="bitcoin" />
                        </div>
                        <div className='px-3 px-sm-4 d-flex justify-content-center'>
                            <img className='w-100 cursor-poiner ophover' src={ton} alt="bitcoin" />
                        </div>
                    </Slider>
                </div>
            </Container>
        </>
    )
}


export default Partnership