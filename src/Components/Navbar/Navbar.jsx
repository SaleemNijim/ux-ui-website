import React, { Fragment, useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../Assets/logo.svg'

const Menu = () => (
    <Fragment >
        <p><a href='#home'>Home</a></p>
        <p><a href='#whpt3'>What is GPT3?</a></p>
        <p><a href='#features'>Case Studies</a></p>
        <p><a href='#possibility'>Open AI</a></p>
        <p><a href='#blog'>Library</a></p>
    </Fragment>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='gpt3__navbar-links_container' ><Menu /></div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button' className=''>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu' style={{ transition: 'all 0.3s ease' }}>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu &&
                    <div className='gpt3__navbar-menu_container' >
                        <div className='gpt3__navbar-menu_container' >
                            <Menu />
                            <div className='gpt3__navbar-menu_container-links-sign'>
                                <p>Sign in</p>
                                <button type='button' className=''>Sign up</button>
                            </div>
                        </div>
                    </div>

                }
            </div>
        </div>

    )
}

export default Navbar
