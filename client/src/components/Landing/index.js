import { NavLink as Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md'
import './landing.css';
import imggif from '../../img/Landingpage.gif'

const Landing = () => {
    return (
        <div>
        <img className='bodybk' src={imggif} ></img>
        <header className='header'>
            <nav className='navLanding'>
                <div className='logo'>
                Country-application
                </div>
                <ul className='navUlLandin'>
                    <li className='navliLanding'><Link className='navLinkLanding' to='/home'>Home</Link></li>
                    <li className='navliLanding'><Link className='navLinkLanding' to='/about'>About</Link></li>
                    <li className='navliLanding'><Link className='navLinkLanding' to='/'>Activity</Link></li>
                </ul>
            </nav>
            <div className='header-cont'>
                <h2>Dreams can be made with effort <MdCardTravel/></h2>
                <p>Dare to travel...</p>
                <Link className='nose' to='/home'>Start here</Link>
            </div>
        </header>
            </div>
    );
};  

export default Landing;