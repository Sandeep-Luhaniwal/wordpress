import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CallIcon, FacbookIcon, FooterIcon, HomeIcon, IndeedIcon, InstagramIcon, MessageIcon, NikkiIcon, SearchIcon2, TwitterIcon, WordpressIcon } from './Icon'

const Footer = () => {
    return (
        <>
            <section className='bg_black'>
                <Container className='py-40 py-sm-50 py-md-60 py-lg_70'>
                    <div className="mb-2 d-flex justify-content-end">
                        <div className='footerSearch '>
                            <div className="d-flex">
                                <input type="Search" placeholder='Search here....' className='w-100' /><SearchIcon2 />
                            </div>
                        </div>
                    </div>
                    <Row className='pt-4 pt-lg-5'>
                        <Col lg={3} md={4} sm={6}>
                            <ul className='ps-0 mb-0'>
                                <li className='ff_primary fw_regular fs_sm color_white'>Services</li>
                                <li className='pt-3'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>WordPress Development</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>WooCommerce Development</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>WordPress Maintenance</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>Speed Optimization</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>Dedicated WordPress Developer</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>Headless WordPress Development</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>White Label Development</span>
                                </Link></li>

                            </ul>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='pt-4 pt-sm-0'>
                            <ul className='ps-0 mb-0'>
                                <li className='ff_primary fw_regular fs_sm color_white'>Services</li>
                                <li className='pt-3'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>WordPress Hosting</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>PSD, XD, Figma to WordPress Conversion</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>Custom WordPress Theme</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>Custom WordPress Plugins</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>CMS to WordPress</span>
                                </Link></li>
                                <li className='pt-13'><Link>
                                    <FooterIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white position-relative line'>WordPress Malware Removal</span>
                                </Link></li>

                            </ul>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='pt-4 pt-md-0'>
                            <ul className='ps-0 mb-0'>
                                <li className='ff_primary fw_regular fs_sm color_white'>Latest Articles</li>
                                <li className='pt-3 pb-1'><Link className='ps-1 ff_primary fs_xs fw_regular color_white hoverEffect'>
                                    7 WordPress Plugins to Create an Effective Newsletter 03.01.2022
                                </Link></li>
                                <li className='pt-3 pb-1'><Link className='ps-1 ff_primary fs_xs fw_regular color_white hoverEffect'>
                                    What’s the Perfect Blog Post Length for Your WordPress Site’s SEO?
                                    02.01.2022
                                </Link></li>
                                <li className='pt-3 pb-1'><Link className='ps-1 ff_primary fs_xs fw_regular color_white hoverEffect'>
                                    5 Reasons the Future of WordPress Is Headless 01.01.2022
                                </Link></li>
                                <li className='pt-3'><Link className='ps-1 ff_primary fs_xs fw_regular color_white hoverEffect'>
                                    Viptor Says: Vipe Studio’s WordPress Developers Wrap Up the Amazingly Successful 2021 30.12.2021
                                </Link></li>

                            </ul>
                        </Col>
                        <Col lg={3} md={4} sm={6} className='pt-4 pt-lg-0'>
                            <ul className='ps-0 mb-0'>
                                <li className='ff_primary fw_regular fs_sm color_white pb-1'>Contact</li>
                                <li className='pt-3 pb-1'><Link>
                                    <CallIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white ps-2 hoverEffect'>EU: +359 988 993 128</span>
                                </Link></li>
                                <li className='pt-4 pb-1'><Link>
                                    <CallIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white ps-2 hoverEffect'>US: +1 (1 888) 266-6917</span>
                                </Link></li>
                                <li className='pt-4 pb-1'><Link>
                                    <MessageIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white ps-2 hoverEffect'>office@vipestudio.com</span>
                                </Link></li>
                                <li className='pt-4'><Link>
                                    <HomeIcon /><span className='ps-1 ff_primary fs_xs fw_regular color_white ps-2 hoverEffect'>14 Srebarna, Sofia 1407, Bulgaria</span>
                                </Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='bg_black borderFooter position-relative'>
                <Container className='pt-30'>
                    <div className='d-flex flex-column flex-md-row justify-content-md-between align-items-center'>
                        <div className='order-1 order-md-0 pt-3 pt-md-0'>
                            <p className='mb-1 pb-1 pb-md-2 ff_primary fs_xs fw_regular color_white text-center text-md-start'>© Vipe Studio 2016-2022</p>
                            <ul className='gap-12 d-flex mb-0 ps-0'>
                                <li><Link className='ff_primary fs_xs fw_regular color_white hoverEffect'>Privacy</Link></li>
                                <li><Link className='ff_primary fs_xs fw_regular color_white position-relative linefooter hoverEffect'>Careers</Link></li>
                                <li><Link className='ff_primary fs_xs fw_regular color_white position-relative linefooter hoverEffect'>Media</Link></li>
                                <li><Link className='ff_primary fs_xs fw_regular color_white position-relative linefooter hoverEffect'>Client Area</Link></li>
                            </ul>
                        </div>
                        <ul className='ps-0 mb-0 d-flex gap-2 gap-md-3 order-0'>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><NikkiIcon /></Link>
                            </li>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><IndeedIcon /></Link>
                            </li>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><TwitterIcon /></Link>
                            </li>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><FacbookIcon /></Link>
                            </li>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><InstagramIcon /></Link>
                            </li>
                            <li>
                                <Link className="footersIcon d-flex justify-content-center align-items-center"><WordpressIcon /></Link>
                            </li>
                        </ul>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Footer