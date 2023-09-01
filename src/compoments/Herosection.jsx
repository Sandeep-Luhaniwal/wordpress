import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { PlayIcon, RotateIcon, SearchIcon } from './Icon'
import HeadingImg from '../assets/Images/png/Headin_img.png'
import Star from '../assets/Images/png/Star.png'
import MainLogo from '../assets/Images/png/main_logo.png'
import { Link } from 'react-router-dom'
// import shadow1 from '../assets/Images/svg/buler1.svg'

const Herosection = () => {
    return (
        <>
            <div className="bg-black position-relative overflow-hidden">
                <div className='shadow1'></div>
                <div className='shadow2'></div>
                <Container className='mt-79 position-relative z-3'>
                    <Row className='heropadding'>
                        <Col lg={6} className='order-1 order-lg-0 d-flex flex-column justify-content-lg-center'>
                            <h1 className='ff_secondary color_white fw_regular fs_5xl mb-0 pb-2 position-relative lineBefore mt-3 mt-lg-0'>WordPress <span className='d-lg-block'>Development</span> Agency</h1>
                            <h4 className='ff_primary color_white fs_lg fw_bold mb-0 py-22'>for Enterprise + Friendly Team</h4>
                            <p className='ff_primary color_white fs_sm fw_regular mb-0 op-7 pb-1'>Vipe Studio is a WordPress Agency for development - a long-term partner for any WordPress service. Websites and,online shops development, maintenance and customization is what we do best.</p>
                            <div className='d-flex align-items-center justify-content-center justify-content-lg-start pt-4'>
                                <button className='ff_primary fs_md color_white fw_semibold inline-btn2 bg_primary me-34'>Get Started</button>
                                <div className="d-none d-sm-block">
                                    <div className='d-flex align-items-center '>
                                        <Link><PlayIcon /></Link>
                                        <p className='ff_primary color_white fs_sm fw_regular mb-0 op-7 ml-14'>What is Vipe? (1min)</p>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex align-items-center justify-content-center d-sm-none pt-3'>
                                <Link><PlayIcon /></Link>
                                <p className='ff_primary color_white fs_sm fw_regular mb-0 op-7 ml-14'>What is Vipe? (1min)</p>
                            </div>
                        </Col>
                        <Col lg={6} className='order-0 order-lg-1 d-flex align-items-center align-items-xxl-start'>
                            <div className='position-relative z-3'>
                                <img src={HeadingImg} alt="headingImg" className='w_100' />
                                <div className=' position-absolute box'>
                                    <div className="">
                                        <img src={MainLogo} alt="headingImg" className='p position-relative z-2' />
                                        <img src={Star} alt="headingImg" className='my-1' />
                                        <p className='mb-0 ff_tertiary color_white fs_sm fw_regular pt-sm-1'>Rated 5.0 Excellent</p>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='py-30 py-sm-40 py-md-50 py-lg-64'>
                        <Col lg={6}>
                            <h2 className='mb-0 ff_secondary fw_regular color_white fs_2xl'>Tell us more....</h2>
                            <p className='pt-3 mb-0 ff_primary fs_sm fw_regular color_white op-7 pe-3'>Lectus vitae est ultrices sed. Sit aliquam commodo hac donec augue in quis. <span className=''>Magna vel orci sem neque fringilla et lectus laoreet.</span></p>
                        </Col>
                        <Col lg={6} className='pt-4 pt-lg-0'>
                            <div className='seacrh d-flex justify-content-between mb-1'>
                                <input type="text" placeholder='What do you need assistance with?' className='w-100 me-3' />
                                <SearchIcon />
                            </div>
                            <div className="d-flex pt-2 justify-content-between max-w-537">
                                <div className="d-flex align-items-center">
                                    <RotateIcon /><span className='ff_primary fs_sm fw_regular color_white ps-2 mb-0'>or send us an inquire?	</span>
                                </div>
                                <p className='ff_primary fs_sm fw_regular color_white mb-0'>Learn more about...</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Herosection