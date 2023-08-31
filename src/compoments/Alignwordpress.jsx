import React from 'react'
import wordpressimg from '../assets/Images/png/wordpressImg.png'
import { Col, Container, Row } from 'react-bootstrap'

const Alignwordpress = () => {
  return (
      <>
          <Container className='pb-xl-110 py_30 py-sm_40 py-md-50 py-lg-65'>
              <Row className=' align-items-center justify-content-center'>
                  <Col md={9} lg={6}>
                      <img src={wordpressimg} alt="wordpressimg" className='w-100 pe-3' />
                  </Col >
                  <Col lg={6} className='ps-lg-0'>
                      <h2 className='mb-0 ff_secondary fs_4xl color_black fw_regular pb-3'><span className='color_primary'>Agile WordPress</span> Development Project management</h2>
                      <p className='mb-0 ff_primary fs_sm fw_regular pb-2 pe-xl-3 pb-lg-4 op-7'>Suspendisse consequat egestas arcu et et. Viverra quis euismod neque luctus bibendum. Fringilla in nibh fringilla vulputate in. Elit, ultricies vitae pulvinar arcu dignissim ac non rutrum. Lacus tortor sollicitudin risus eget euismod in bibendum turpis. </p>
                      <button className='ff_primary fs_md color_white fw_semibold inline-btn bg_primary mt-2'>Explore</button>
                  </Col>
              </Row>
          </Container>
    </>
  )
}

export default Alignwordpress