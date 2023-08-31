import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import vitor from '../assets/Images/png/Viptor.png'
import navtabCard from '../assets/Images/png/Card_img.png'
import { Link } from 'react-router-dom';

const Navtab = () => {
    const [activetab, setActiveTab] = useState("First");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <section className='bg_cardHeading'>
            <Container className='py-40 py-sm-60 py-md-80 pb-lg-100 pb-xl-120 pt-lg-150 pt-xl-210'>
                <Row className='justify-content-center'>
                    <Col sm={9} md={7} lg={4}>
                        <img src={vitor} alt="vitor" className='w-100' />
                    </Col>
                    <Col lg={8} className='pt-4 pt-lg-0 overflow-hidden'>
                        <p className='mb-0 ff_primary fs_sm fw_regular color_gray'>HAVE YOU SEEN OUR MASCOT?</p>
                        <h2 className='mb-3 ff_secondary fs_4xl color_black fw_regular'>Success Guides</h2>
                        <div className=''>
                            <div className='pb-6 pb-md-0 scroll'>
                                <ul className='mb-0 ps-0 d-flex py-2 gap-10 '>
                                    <li onClick={() => handleTabClick("First")} className="cursor-pointer tabBtn mb-0">
                                        <span className={`ff_primary fw_bold fs_2sm btnTabactive ${activetab === "First" ? "bg_primary color_white " : "color_primary btnTab"}`}>
                                            Category-1
                                        </span>
                                    </li>
                                    <li onClick={() => handleTabClick("Second")} className="cursor-pointer">
                                        <span className={`ff_primary fw_bold fs_2sm btnTabactive ${activetab === "Second" ? "bg_primary color_white " : "color_primary btnTab"}`}>
                                            Category-2
                                        </span>
                                    </li>
                                    <li onClick={() => handleTabClick("Thrid")} className="cursor-pointer">
                                        <span className={`ff_primary fw_bold fs_2sm btnTabactive ${activetab === "Thrid" ? "bg_primary color_white " : "color_primary btnTab"}`}>
                                            Category-3
                                        </span>
                                    </li>
                                    <li onClick={() => handleTabClick("Fourth")} className="cursor-pointer">
                                        <span className={`ff_primary fw_bold fs_2sm btnTabactive ${activetab === "Fourth" ? "bg_primary color_white " : "color_primary btnTab"}`}>
                                            Category-4
                                        </span>
                                    </li>
                                </ul>
                            </div>
                            <div className=' w-100'>
                                {activetab === "First" && (
                                    <Row className='pt-36 justify-content-center'>
                                        <Col sm={6} md={4}>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Sit diam metus</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className='pt-4 pt-sm-0'>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Sit diam metus</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className='pt-4 pt-md-0'>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Sit diam metus</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                                {activetab === "Second" && (
                                    <Row className='pt-36 justify-content-center'>
                                        <Col sm={6} md={4}>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-2</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className='pt-4 pt-sm-0'>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-2</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                        <Col sm={6} md={4} className='pt-4 pt-md-0'>
                                            <div className='tabCard p-2 p-md-3'>
                                                <div className='pb-3'>
                                                    <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                </div>
                                                <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-2</h4>
                                                <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                            </div>
                                        </Col>
                                    </Row>
                                )}
                                {activetab === "Thrid" && (
                                    <div>
                                        <Row className='pt-36 justify-content-center'>
                                            <Col sm={6} md={4}>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-3</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                            <Col sm={6} md={4} className='pt-4 pt-sm-0'>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-3</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                            <Col sm={6} md={4} className='pt-4 pt-md-0'>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-3</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                                {activetab === "Fourth" && (
                                    <div>
                                        <Row className='pt-36 justify-content-center'>
                                            <Col sm={6} md={4}>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-4</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                            <Col sm={6} md={4} className='pt-4 pt-sm-0'>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-4</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                            <Col sm={6} md={4} className='pt-4 pt-md-0'>
                                                <div className='tabCard p-2 p-md-3'>
                                                    <div className='pb-3'>
                                                        <img src={navtabCard} alt="navtabCard" className='navtabCard' />
                                                    </div>
                                                    <h4 className='ff_primary fs_lg fw_semiBold color_dark mb-0'>Category-4</h4>
                                                    <p className='ff_primary fs_sm fw_regular mb-0 op-7 color_black pb-2 pt-10'>Arcu amet, consectetur vel pellentesque mattis ipsum sed mattis sed.</p>
                                                    <Link className='ff_primary fs_sm fw_semiBold color_primary'>Read More....</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
        </>
    )
}

export default Navtab