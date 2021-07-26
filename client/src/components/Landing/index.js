import { NavLink as Link } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md'
import { motion } from "framer-motion";
import './landing.css';
import imggif from '../../img/Landingpage.gif'

const containerVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1.5, duration: 1.5},
    },
    exit: {
      x: "-100vh",
      transition: { ease: "easeInOut", duration: 0.8 },
    },
  };

const Landing = () => {
    return (
        <motion.div variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit">
        <img className='bodybk' src={imggif} alt="not fount"></img>
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
            </motion.div>
    );
};  

export default Landing;