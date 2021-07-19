import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { allCountries, getCountries } from '../../actions';

const Search = () => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();

    const inputHandler = e => {
        setState(e.target.value)
    };

    const onClickHandler = () => {
        dispatch(getCountries(state))
    };

    const resetHandler = () => {
        dispatch(allCountries())
    };

    return (
        <div>
            <div>
                <input required autoComplete='off' type='text' placeholder='Find a country...' name='input' onChange={e => inputHandler(e)} />
                <button onClick={onClickHandler}>Search</button>
                <button onClick={resetHandler}>Reset</button>
            </div>
        </div>
    );
};

export default Search;