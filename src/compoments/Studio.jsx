import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RightIcon, RightclickIcon } from './Icon'
import people from '../assets/Images/png/People1.png'

const Studio = () => {
    return (
        <>
            <section className='bg-black overflow-hidden position-relative'>
                <div className="shadow3"></div>
                <div className="shadow4"></div>
                <Container className='py-40 py-sm-60 py-md-80'>
                    <div className='d-flex justify-content-between flex-wrap'>
                        <h3 className='mb-0 ff_secondary fs_3xl color_white fw_regular'>All Vipe Studio <span className='d-xl-block'>WordPress</span> services include:</h3>
                        <ul className='ps-0 mb-0'>
                            <li className='fs_primary fw_semiBold color_white fs_lg'>By Industry</li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-4'>
                                <RightclickIcon /><span className='ps-10'>Lorem in elementum pellentesque</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Molestie cursus praesent mi</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Leo sed viverra cras</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Laoreet feugiat ut at</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Risus aliquam molestie viverra</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Diam enim pulvinar velit</span>
                            </li>
                        </ul>
                        <ul className='ps-0 mb-0'>
                            <li className='fs_primary fw_semiBold color_white fs_lg'>By Services </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-4'>
                                <RightclickIcon /><span className='ps-10'>Accumsan, dui a semper</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Interdum malesuada vulputate neque</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Nullam non a, morbi</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Arcu morbi leo eu</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Viverra venenatis, in ornare</span>
                            </li>
                            <li className='fs_primary fw_regular color_white fs_sm pt-11'>
                                <RightclickIcon /><span className='ps-10'>Erat id aliquam habitant</span>
                            </li>
                        </ul>
                    </div>
                    <div className='pt-50 pt-sm-70 pt-md-100 pt-lg-130 pt-xl-165 position-relative z-3'>
                        <div className="sureCard">
                            <Row className='justify-content-center'>
                                <Col  sm={5} lg={4}>
                                    <h3 className='color_white fs_xl fw_regular ff_secondary'>Not Sure <span className='d-lg-block'> which service</span> you need <span className='d-lg-block'>yet?</span></h3>
                                    <button className='ff_primary fs_md color_white fw_semibold inline-btn bg_primary mt-3 mt-md-4 mt-xl-5'>Schedule An Appointment</button>
                                </Col>
                                <Col sm={7} lg={4} className='pt-4 pt-sm-0'>
                                    <h3 className='color_white fs_lg fw_semibold ff_primary'>20-m free consultation that will help us identifyif  you need</h3>
                                    <ul className='ps-0 mb-0 pt-4'>
                                        <li className='fs_primary fw_regular color_white fs_sm pb-1'>
                                            <RightIcon /><span className='ps-10'>Technical Description & Discovery</span>
                                        </li>
                                        <li className='fs_primary fw_regular color_white fs_sm pt-11 pb-1'>
                                            <RightIcon /><span className='ps-10'>Custom WordPress Development</span>
                                        </li>
                                        <li className='fs_primary fw_regular color_white fs_sm pt-11 pb-1'>
                                            <RightIcon /><span className='ps-10'>Support & Maintenance</span>
                                        </li>
                                        <li className='fs_primary fw_regular color_white fs_sm pt-11 pb-1'>
                                            <RightIcon /><span className='ps-10'>Other WordPress Service	</span>
                                        </li>
                                    </ul>
                                </Col>
                                <Col sm={6} lg={4} className='pt-4 pt-lg-0'>
                                    <img src={people} alt="people" className='w-100 people' />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container >
            </section >
        </>
    )
}

export default Studio