import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BussinessIcon, ContantIcon, SuportIcon} from './Icon'
import { Link } from 'react-router-dom'

const Internon = () => {
    return (
        <>
            <section className='bg_cardHeading'>
                <Container className='py-40 py-sm-60 py-md-80 py-lg-97'>
                    <h2 className='mb-0 ff_secondary fs_4xl color_black fw_regular pb-30 pb-sm-40 pb-md-55 pb-lg-70'>Integer et nisl non</h2>
                    <Row className='justify-content-center'>
                        <Col sm={6} lg={4}>
                            <div className="interCard">
                                <div className="d-flex justify-content-center">
                                    <ContantIcon />
                                </div>
                                <h3 className='mb-0 ff_tertiary color_dark fs_lg fw_semiBold pt-40 text-center'>Enterprise WordPress Solutions	</h3>
                                <p className='ff_primary fs_sm fw_regular color_black op-7 mb-0 py-3 text-center'>Pretium, a et sapien non nunc libero. Id dolor sed quis convallis turpis purus feugiat nibh eu. Auctor cras hac ac, sociis diam montes, turpis commodo elit.</p>
                                <div className='text-center'>
                                    <Link className='ff_primary color_primary fw_semiBold mb-0 pt-1'>Learn More</Link>
                                </div>
                            </div>
                        </Col>
                        <Col  sm={6}lg={4} className='pt-4 pt-sm-0'>
                            <div className="interCard">
                                <div className="d-flex justify-content-center">
                                    <BussinessIcon />
                                </div>
                                <h3 className='mb-0 ff_tertiary color_dark fs_lg fw_semiBold pt-40 text-center'>Small to Mid Size Business Development</h3>
                                <p className='ff_primary fs_sm fw_regular color_black op-7 mb-0 py-3 text-center'>Et nunc fermentum id amet tempus, elementum. Eget ac ultrices tortor, mattis amet blandit aenean amet. Massa diam lacus, aliquam neque, cursus.</p>
                                <div className='text-center'>
                                    <Link className='ff_primary color_primary fw_semiBold mb-0 pt-1'>Learn More</Link>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} lg={4} className='pt-4 pt-lg-0'>
                            <div className="interCard">
                                <div className="d-flex justify-content-center">
                                    <SuportIcon />
                                </div>
                                <h3 className='mb-0 ff_tertiary color_dark fs_lg fw_semiBold pt-40 text-center'>Support & Maintenance</h3>
                                <p className='ff_primary fs_sm fw_regular color_black op-7 mb-0 py-3 text-center'>Ac donec ipsum fringilla tortor, consectetur etiam sociis amet quis. Viverra volutpat pretium non in fusce tellus sed urna. Pharetra ullamcorper et donec aliquam.</p>
                                <div className='text-center pt-1 pb-lg-1 pb-xl-4 pb-xxl-0'>
                                    <Link className='ff_primary color_primary fw_semiBold mb-0'>Learn More</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Internon