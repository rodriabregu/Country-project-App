import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "../Pagination/";
import { allCountries } from '../../actions';
import Search from '../Search';

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allCountries())
    }, [dispatch], );

    return (
        <div> 
            <Search />
            <Pagination />
        </div>
    );
};

export default Home;