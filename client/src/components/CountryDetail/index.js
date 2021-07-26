import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions';
import { motion } from 'framer-motion';
import Activity from './activityDetail'
import './details.css';

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
      transition: { ease: "easeInOut" },
    },
  };

const CountryDetail = () => {
    const countryDetail = useSelector(s => s.countryDetail);
    const dispatch = useDispatch()

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    return (
        <motion.div className='form-detail'
        variants={containerVariants}
        initial="hidden"
        animate="show"
        exit="exit">
            <div className='divdetailtitle'>
                <div className='h1detail'>
                    <h1>{countryDetail.name}</h1>
                </div>
                <h3>( {countryDetail.id} )</h3>
            </div>
            <div>
            <img className='imgform' src={countryDetail.flag} alt="Not found" />
            </div>
            <div className='countrystats'>
            <h5>Continent: {countryDetail.region}</h5>
            <h5>Capital: {countryDetail.capital}</h5>
            <h5>Subregion: {countryDetail.subregion}</h5>
            <h5>Population: {countryDetail.population} h.</h5>
            <h5>Area: {countryDetail.area} km2.</h5>
            </div>
            <div>
                <Activity countryName={countryDetail.name} activities={countryDetail.activities}/>
            </div>
            <button className='btnbackcountry'>
                <Link to='/home'>Back to countries</Link>
            </button>
        </motion.div>
    )
};

export default CountryDetail;