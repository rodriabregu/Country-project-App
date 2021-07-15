import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Pagination } from "../Pagination/Pagination";
import { allCountries } from '../../actions'
import Search from '../Search';
import { filterCountrysAsc, filterCountrysDsc, regionFilter, activityFilter } from '../../actions';

function Home() {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countriesAll);
/*     const countriesFilter = useSelector(state => state.countryFilter) */
    const countriesAll = useSelector(state => state.countriesAll)
    const [loading, setLoading] = useState(false);
    const [activity, setActivity] = useState('');

    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch], );

    const resetHandler = () =>{
        dispatch(allCountries())      
    };

    const handleRegionChange = e => {
        dispatch(regionFilter(e.target.value))
    }

    const handleChangeOrder = (e) =>{
        if(e.target.value === 'ASC' ){
            dispatch(filterCountrysAsc(countries))
        }
        if(e.target.value === 'DES'){
            dispatch(filterCountrysDsc(countries))
        }
    }

    const activityHandler = e => {
        setActivity(e.target.value)
    }

    const setInputHandler = e => {
        e.preventDefault();
        dispatch(activityFilter(activity))
    }

    return (
        <div> 
            <Link to='/home' onClick={() => resetHandler()}>Home</Link>
            <Search /> 
            <div >
                <select onChange={handleRegionChange}>
                    <optgroup label="Select a continent">
                        <option value="">Select one Continent</option>
                        <option value="Americas">Américas</option>
                        <option value="Asia">Asia</option>   
                        <option value="Europe">Europe</option>   
                        <option value="Oceania">Oceanía</option>   
                        <option value="Africa">África</option>
                        <option value="Polar">Polar</option>
                    </optgroup>
                </select>
            </div>
            <div>
                <select onChange={handleChangeOrder}>
                    <optgroup label="Select an a Order">
                        <option value="none">Alphabetical Order</option>
                        <option value='ASC'>Ascendente</option>
                        <option value='DES'>Descendente</option>
                    </optgroup>
                </select>
            </div>
            <div>
                <label>Activity</label>
                <form onSubmit={setInputHandler}>
                <input placeholder="searching rico..." type="text" value={activity} onChange={activityHandler}/>
                </form>
            </div>
        <Pagination countriesAll={countriesAll} loading={loading}/>
        </div>
    );
};

export default Home;