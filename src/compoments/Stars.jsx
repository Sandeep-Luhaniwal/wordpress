import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import stars from '../assets/Images/png/StarsImg.png'

const Stars = () => {
    return (
        <>
            <section className='bg_heading'>
                <Container className='py-40 py-sm-60 py-md-80 py-lg-120'>
                    <Row className='justify-content-center'>
                        <Col lg={6} className='order-1 order-lg-0 pt-4 pt-lg-0'>
                            <h2 className='mb-0 ff_secondary fs_4xl color_black fw_regular pb-2'>Team Full of Stars	</h2>
                            <p className='mb-0 ff_primary fs_sm fw_regular color_black pb-2 pb-lg-4 pt-1'>Suspendisse consequat egestas arcu et et. Viverra quis euismod <span className='d-lg-block'>neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, </span>ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor <span className='d-xl-block'>sollicitudin risus eget euismod in bibendum turpis.</span></p>
                            <button className='ff_primary fs_md color_white fw_semibold inline-btn bg_primary mt-2'>Explore</button>
                        </Col>
                        <Col sm={9} lg={6} className='StarImg order-0 order-lg-1'>
                            <img src={stars} alt="stars" className='w-100 stars' />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Stars