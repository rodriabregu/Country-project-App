import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllActivity, allCountries, activityFilter } from '../../redux/actions';
import { Loading } from '../Loading';
import './pagination.css';

export const Pagination = () => {
    const dispatch = useDispatch();
    const countries = useSelector(s => s.countriesAll);
    const activities = useSelector(s => s.activityCreate)
    const countryShowed = useSelector(s => s.countryShowed)

    const [page, setPage] = useState(0);
    const [max, setMax] = useState(0);
    const [filter, setFilter] = useState([])
    const [order, setOrder] = useState([])
    const [prueba, setPrueba] = useState([]);

    const nextPage = () => { page < max && setPage(page + 10) };
    const prevPage = () => { page > 0 && setPage(page - 10) };
    const firstPage = () => { setPage(0) };
    const lastPage = () => { setPage(240) };

    const AZ = (a, b) => { return (a.name > b.name ? 1 : -1) } //Comprueba en base codigo ASCII
    const ZA = (a, b) => { return (b.name > a.name ? 1 : -1) }

    const Asc = (a, b) => { return b.population - a.population} //Si es positivo, el segundo elemento es superior al primero, la poblacion va menor a mayor
    const Desc = (a, b) => { return a.population - b.population} //Si es negativo, el primer elemento es superior al segundo osea, la poblacion de menor a mayor

    const handleOrder = (e) => {
        setOrder(e.target.value)
    }

    const countriesFiltered = filter && filter.length > 0 ? filter : countries;

    const handleChange = e => {
        setPage(0)
        let filter = []
        if (e.target.value === '---') return setFilter([])
        if (e.target.value === 'Americas' ||
            e.target.value === 'Europe' ||
            e.target.value === 'Asia' ||
            e.target.value === 'Africa' ||
            e.target.value === 'Oceania' ||
            e.target.value === 'Polar') {
            filter = countries.filter( c => c.region === e.target.value)
            return setFilter(filter)
        }
    }

    const handleFilter = (e) => {
        setPrueba(e.target.value);
    };

    const submitFilter = (e) => {
        e.preventDefault();
        dispatch(activityFilter(countries, prueba));
        setFilter(countryShowed)
    };

    useEffect(() => {
        switch (order) {
            case 'D': setPage(0); return setFilter(countries)
            case 'AZ': setPage(0); return setFilter([...countriesFiltered].sort(AZ))
            case 'ZA': setPage(0); return setFilter([...countriesFiltered].sort(ZA))
            case 'Asc': setPage(0); return setFilter([...countriesFiltered].sort(Asc))
            case 'Desc': setPage(0); return setFilter([...countriesFiltered].sort(Desc))
            default: return countriesFiltered;
        }
    }, [countries, order])

    useEffect(() => {
        dispatch(getAllActivity())
        setMax(countries.length - 10)
    }, [dispatch, countries])

    
    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch]);

    return (
        <div>
        {
            countries.length > 0 ?
            <div>
                <br/>
                <div className="content-select">
                    <div>
                        {page > 1 ? <button className='btn-first' onClick={firstPage}>{'<<'}</button> : ""}
                        {page > 1 ? <button className='btn-prev' onClick={prevPage}>PREV</button> : ""}
                        {page < 240 ? <button className='btn-next' onClick={nextPage}>NEXT</button> : ""}
                        {page < 240 ? <button className='btn-last' onClick={lastPage}>{'>>'}</button> : ""}
                    </div>
                    <br/>
                    <select onChange={handleOrder}>
                        <option value='D'>Order by:</option>
                        <option value='AZ'> A to Z </option>
                        <option value='ZA'> Z to A </option>
                        <option value='Asc'> Ascending population </option>
                        <option value='Desc'> Descending population </option>
                    </select>
                    <select onChange={handleChange}>
                        <option value='---'>Continent by:</option>
                        <option value='Americas'> Americas </option>
                        <option value='Europe'> Europe </option>
                        <option value='Africa'> Africa </option>
                        <option value='Asia'> Asia </option>
                        <option value='Oceania'> Oceania </option>
                        <option value='Polar'> Polar </option>
                    </select>
                    <form >
                    <select onChange={(e) => handleFilter(e)}>
                        <option value='---'> --- </option>
                        {
                            activities && activities.length > 0 ? activities.map( c => {
                                return (
                                    <option key={c.id} value={c.name}>{c.name}</option>
                                )
                            }) : null
                        }
                    </select>
                    <button className='filterbuttom' onClick={submitFilter}>Filter</button>
                    </form>
                </div>
                <div>
                <br/>

                    <div className='wrapper-flex'>
                        {countriesFiltered.length > 0 ? countriesFiltered.slice(page, page + 10).map(c => {
                            return (
                                <>
                                    <div key={c.alpha3Code} className='container'>
                                        <div className='card'>
                                            <div className='imgBox'>
                                                <img src={c.flag} alt="not found" />
                                            </div>
                                            <div className='content'>
                                                <p> Name: {c.name} </p>
                                                <p> Continent: {c.region} </p>
                                            <div className='btn'>
                                                <Link key={c.id} to={`/home/${c.id}`}>
                                                    <h2> See more.. </h2>
                                                </Link>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }) : null
                        }
                    </div>

                </div>      
            </div>
            :   <div>
                    <Loading />
                </div>}
            </div>
    );
};