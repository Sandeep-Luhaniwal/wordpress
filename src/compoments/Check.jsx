import React from 'react'
import { Container} from 'react-bootstrap'

const Check = () => {
    return (
        <>
            <section className='bg_check'>
                <Container>
                    <div className="checkBox">
                        <div className="d-flex flex-column flex-lg-row justify-content-between">
                            <div className="d-flex flex-column align-items-center align-items-lg-start">
                                <h2 className='mb-0 ff_secondary fs_4xl color_white fw_regular'>Have you</h2>
                                <p className='mb-0 ff_primary fs_sm fw_regular color_white pt-2'>read our study about Speed and Performance in <span className='d-xl-block'>WordPress?</span></p>
                            </div>
                            <div className="d-flex align-items-center justify-content-center justify-content-lg-end mt-4 mt-lg-0">
                                <button className='outline bg_white color_primary ff_tertiary fs_md fw_semiBold'>Check It Out</button>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Check