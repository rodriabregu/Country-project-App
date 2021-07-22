import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from '../../redux/actions';
import Activity from './activityDetail'

const CountryDetail = () => {
    const countryDetail = useSelector(s => s.countryDetail);
    const dispatch = useDispatch()

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id]);

    return (
        <div>
            <button>
                <Link to='/home'>Back to countries</Link>
            </button>
            <div>
                <h1>{countryDetail.name}</h1>
                <h3>{countryDetail.id}</h3>
            </div>
            <div>
            <img src={countryDetail.flag} alt="Not found" />
            </div>
            <h4>Continent: {countryDetail.region}</h4>
            <h5>Capital: {countryDetail.capital}</h5>
            <h5>Subregion: {countryDetail.subregion}</h5>
            <h5>Population: {countryDetail.population} h.</h5>
            <h4>Area: {countryDetail.area} km2.</h4>
            <div>
                <Activity countryName={countryDetail.name} activities={countryDetail.activities}/>
            </div>
        </div>
    )
};

export default CountryDetail;