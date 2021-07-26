import { Pagination } from "../Pagination/";
import { motion } from 'framer-motion';
import Search from '../Search';

const containerVariants = {
    hidden: {
      opacity: 0,
      y: "50vh",
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut", duration: 0.8 },
    },
  };

function Home() {
    return (
        <motion.div variants={containerVariants} initial="hidden" animate="show" exit="exit"> 
            <Search />
            <Pagination />
        </motion.div>
    );
};

export default Home;