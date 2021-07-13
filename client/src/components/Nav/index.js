import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        };
    };
    window.addEventListener('scroll', changeBackground);
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/activity'>Activity</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;