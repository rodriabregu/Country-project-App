import React from 'react';
import { NavLink as Link  } from "react-router-dom";
import './nav.css';
import { BiHomeAlt } from 'react-icons/bi';
import { FaInfoCircle } from 'react-icons/fa';
import { IoCreateOutline } from 'react-icons/io5';

function Nav() {
  
  return (
    <>
      <nav className="topnav">
        <Link to='/home'>
          Home <span><BiHomeAlt /></span>     
        </Link>
        <Link to='/activity'>
          Activity create <IoCreateOutline/>
        </Link>
        <Link to='/about'>
          About <FaInfoCircle />
        </Link>
      </nav>
    </>
  );
};

export default Nav;
