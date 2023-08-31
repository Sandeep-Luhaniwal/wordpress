import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import Image1 from '../assets/Images/png/propy.png'
import Image2 from '../assets/Images/png/aciela.png'
import Image3 from '../assets/Images/png/revuele.png'
import Image4 from '../assets/Images/png/aciela.png'
import Image5 from '../assets/Images/png/spark.png'
import Image6 from '../assets/Images/png/aciela.png'



const Partner = () => {
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
                    <div className='py-25 py-sm-30 py-md-50 py-lg-70'>
                        <h2 className='mb-0 ff_secondary fs_4xl color_black fw_regular pb-3'>Long Term <span className='d-lg-block'>WordPress Partner</span></h2>
                        <p className='mb-0 ff_primary fs_sm color_black fw_regular op-8 pb-3 pt-1'>Our motto is the long-term partnership – we will not only develop your perfect website, but will <span className='d-lg-block'> be behind you through the whole process. They already trusted us:</span></p>
                        <Slider {...settings} className='op-hover d-flex align-items-center pt-4'>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image1} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image2} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image3} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image4} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image5} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image6} alt="bitcoin" />
                            </div>
                            <div className='px-3 px-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='w-100 cursor-poiner ophover' src={Image3} alt="bitcoin" />
                            </div>
                        </Slider>
                    </div>
                </Container>
            </section>
        </>
    )
}


export default Partner