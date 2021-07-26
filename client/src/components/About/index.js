import React from 'react'
import './about.css';
import { SiJavascript, SiReact, SiRedux } from 'react-icons/si'
import { NavLink as Link } from 'react-router-dom';
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {
      opacity: 0,
      x: '100vw'
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
      },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  };

export const About = () => {
    return (
    <motion.div className="about-section"       
    variants={containerVariants}
    initial="hidden"
    animate="show"
    exit="exit">
        <div className="inner-container">
            <h1>About Us</h1>
                <p className="text">
                My programming career began about two months ago, when losing my old job, I plunged into programming by betting on an outlet like Henry.
                As time went by, I had many difficulties, but with the help of my colleagues and tutors, 
                and above all else, my effort, I managed to get ahead and get here.
                
                <p className='styleP'><br/>Some of the technologies that I have mastered so far:</p>
                </p>
            <div className="skills">
                <Link to='https://es.reactjs.org/'><span>JavaScript <SiJavascript/></span></Link>
                <Link to='https://www.javascript.com/'><span>React <SiReact/></span></Link>
                <Link to='https://redux.js.org/'><span>Redux <SiRedux/></span></Link>
            </div>
        </div>
    </motion.div>
    );
};