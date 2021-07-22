import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions';
import Activity from './activityDetail'
import './details.css';

const CountryDetail = () => {
    const countryDetail = useSelector(s => s.countryDetail);
    const dispatch = useDispatch()

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    return (
        <div className='form-detail'>
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
        </div>
    )
};

export default CountryDetail;