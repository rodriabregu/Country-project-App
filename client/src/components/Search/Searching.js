import {React, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getCountries} from '../../actions';

export default function SearchBar(props) {
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		name: '',
		order: 'ASC',
		aux: 'all',
	});

	const handleInputChange = (e) => {
		const {name, value} = e.target;
		setInput({...input, [name]: value});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(getCountries(input.name, input.order, input.aux));
	};
	return (
			<form onSubmit={handleSubmit}>
				<div>
					<label>search a country</label>
					<input
						name='name'
						placeholder='country name'
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label>order alphabetically</label>
					<select name='order' onChange={handleInputChange}>
						<option value='ASC'>A-Z</option>
						<option value='DESC'>Z-A</option>
					</select>
				</div>
				<div>
					<label>search by: </label>
					<select name='aux' onChange={handleInputChange}>
						<option value='all'>all</option>
						<option value='population'>population</option>
					</select>
				</div>
				<button className='searcButton' type='submit'>
					SEARCH
				</button>
			</form>
	);
}