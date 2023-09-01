import React, { useState } from 'react'
import { CrossIcon, EarthIcon, MenuIcon, } from './Icon'
import { Link } from 'react-router-dom';
import { Container, Dropdown } from 'react-bootstrap';

const Nav = () => {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <nav className='position-fixed z-100 w-100 top-0 bg-black'>
                <Container className='py-16 py-lg-22'>
                    <div className='d-flex align-items-center justify-content-between justify-content-lg-end gap-168'>
                        <div className={`${menu ? 'show-nav' : 'nav-fix'}`}>
                            <div className='d-lg-none crossIconset'
                                onClick={() => setMenu(false)}>
                                <Link><CrossIcon /></Link>
                            </div>
                            <div className='d-flex gap-20 align-items-center'>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownbtn hoverEffect ff_primary fs_sm color_white fw_regular'>
                                        WordPress Solution
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownbtn hoverEffect ff_primary fs_sm color_white fw_regular'>
                                        Services
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a onClick={() => setMenu(false)} className='ff_primary line position-relative fs_sm color_white fw_regular' href='#stars'>Portfolio</a>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownbtn hoverEffect ff_primary fs_sm color_white fw_regular'>
                                        About
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownbtn hoverEffect ff_primary fs_sm color_white fw_regular'>
                                        Blog
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <a onClick={() => setMenu(false)} className='d-lg-none ff_primary line position-relative fs_sm color_white fw_regular' href='#order'>1 888 266-6917 (eu?)</a>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-20 '>
                            <a onClick={() => setMenu(false)} className='d-none d-lg-block ff_primary fs_sm color_white fw_regular hoverEffect cursor-poiner'>1 888 266-6917 (eu?)</a>
                            <button className='ff_primary fs_md color_white fw_semibold inline-btn bg_primary position-relative lineBtn'>Contact Us</button>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='dropdownbtn hoverEffect ff_primary fs_sm color_white fw_regular'>
                                    <EarthIcon />
                                    <span> Eng</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Hindi</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Eng (Us)</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>
                        <div className='d-lg-none '>
                            <Link onClick={() => setMenu(true)}>
                                <MenuIcon /></Link>
                        </div>

                    </div>
                </Container>
            </nav >
        </>
    )
}

export default Nav