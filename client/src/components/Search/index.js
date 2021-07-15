import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { getCountries } from '../../actions';

const Search = () => {
    const [state, setState] = useState('');
    const dispatch = useDispatch();

    const inputHandler = event => {
        setState(event.target.value)
    };

    const onClickHandler = () => {
        dispatch(getCountries(state))
    }

    return (
        <div>
            <div>
                <input required autoComplete='off' type='text' placeholder='Busca papu' name='input' onChange={e => inputHandler(e)} />
                <button onClick={onClickHandler}>Buscar</button>
            </div>
        </div>
        )
};

export default Search;