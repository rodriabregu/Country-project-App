import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllActivity, allCountries } from '../../actions';

/* filterCountrysAsc, filterCountrysDsc, filterCountrysPOASC, filterCountrysPODSC, regionFilter  */

export const Pagination = () => {
    const dispatch = useDispatch();
    const countries = useSelector(s => s.countriesAll);
    const activities = useSelector(s => s.activityCreate)
    const countryDetail = useSelector(s => s.countryDetail);

    const [page, setPage] = useState(0);
    const [max, setMax] = useState(0);
    const [filter, setFilter] = useState([])
    const [order, setOrder] = useState([])

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

    const resetHandler = () =>{
        dispatch(allCountries())      
    };

    const countriesFiltered = filter && filter.length > 0 ? filter : countries;

    useEffect(() => {
        switch (order) {
            case 'O': setPage(0); return setFilter(countries)
            case 'AZ': setPage(0); return setFilter([...countriesFiltered].sort(AZ))
            case 'ZA': setPage(0); return setFilter([...countriesFiltered].sort(ZA))
            case 'Asc': setPage(0); return setFilter([...countriesFiltered].sort(Asc))
            case 'Desc': setPage(0); return setFilter([...countriesFiltered].sort(Desc))
            default: return countriesFiltered
        }
    }, [countries, countriesFiltered, order])

    useEffect(() => {
        dispatch(getAllActivity())
        setMax(countries.length - 10)
    }, [dispatch, countries])

    const handleChange = (e) => {
        setPage(0)
        let f = []
        if (e.target.value === '---') return setFilter([])
        if (e.target.value === 'Americas' ||
            e.target.value === 'Europe' ||
            e.target.value === 'Asia' ||
            e.target.value === 'Africa' ||
            e.target.value === 'Oceania' ||
            e.target.value === 'Polar') {
            f = countries.filter(c => c.region === e.target.value)
            return setFilter(f)
        } else {
        let names = [];
        countryDetail.forEach( c => {
            var filtered = c.activities.filter(t=> t.name === e.target.value)
            if(filtered.length!==0){
                names.push(c)
                return setFilter(names)
            }
            })
        }
    }

/* useEffect(() => {
    dispatch(allCountries())
}, [dispatch], ); */

/* console.log(countryDetail) */
    return (
        <div>
        {
            countries.length > 0 ?
            <div>
                <Link to='/home' onClick={() => resetHandler()}>Home</Link>
                <div>
                    <div>
                        <button onClick={firstPage}>{'<<'}</button>
                        <button onClick={prevPage}>PREV</button>
                        <button onClick={nextPage}>NEXT</button>
                        <button onClick={lastPage}>{'>>'}</button>
                    </div>
                    Filter:
                    <select onChange={handleOrder}>
                        <option value='O'>Order by:</option>
                        <option value='AZ'> A to Z </option>
                        <option value='ZA'> Z to A </option>
                        <option value='Asc'> Population + </option>
                        <option value='Desc'> Population -</option>
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
                    <select onChange={handleChange}>
                        <option value='---'> --- </option>
                        {
                            activities && activities.length > 0 ? activities.map( c => {
                                return (
                                    <option value={c.name}>{c.name}</option>
                                )
                            }) : null
                        }
                    </select>
                </div>
                <div>
                    <div>
                        {countriesFiltered.length > 0 ? countriesFiltered.slice(page, page + 10).map(c => {
                            return (
                                <>
                                    <div>
                                        <Link key={c.id} to={`/home/${c.id}`}>
                                            <div>
                                                <p> Name: {c.name} </p>
                                                <p> Continent: {c.region} </p>
                                            </div>
                                        <img src={c.flag} alt="not found" />
                                            <div>
                                                <h6 > See more.. </h6>
                                            </div>
                                        </Link>
                                    </div>
                                </>
                            )
                        }) : null
                        }
                    </div>
                </div>      
            </div>
            :   <div>
                    <h1>Loading...</h1>
                </div>}
            </div>
    );
};