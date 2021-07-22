import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, addActivity } from "../../redux/actions";
import './form-act.css';

function ActivityFunction() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesAll)

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    cId: [],
  });

  const resetState = () => {
    setState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    cId: [],
  });
  }

  const handleOnChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountry = e => { setState({
    ...state, 
    cId:state.cId.concat(e.target.value) } ) } 

  const resetCodeCountry = e => {
    e.preventDefault()
    setState({...state, cId:[]})
  }

  const handleOnSubmit = async e => {
    /* e.preventDefault(); */
    dispatch(addActivity(state));
    alert('Actividad creada 😎!')
    resetState();
  };

  useEffect(() => {
    dispatch(allCountries())
  }, [dispatch], );
  
  return (
    <div className='form-register'>
      <h1>Activitys</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input className='controls' placeholder="Enter the name of the activity..." type="text" maxLength="16" required autoComplete='off' name="name" value={state.name} onChange={handleOnChange} />
        </div>
        <select className='selectact' name="difficulty" value={state.difficulty} onChange={handleOnChange} >
          <option value="---">Difficulty:</option>
          <option value={1}>1 - Very easy</option>
          <option value={2}>2 - Easy</option>
          <option value={3}>3 - Medium</option>
          <option value={4}>4 - Hard</option>
          <option value={5}>5 - Very difficult</option>
        </select>
        <div>
          <input className='controls' placeholder="Duration of the activity (in days)..." type='number' min="-0" max="31" required autoComplete='off' name="duration" value={state.duration} onChange={handleOnChange} />
        </div>
        <div>
          <select className='selectact' name="season" value={state.season} onChange={handleOnChange}>
            <option value="---">Season:</option>
            <option value={state.Summer}>Summer</option>
            <option value={state.Fall}>Fall</option>
            <option value={state.Winter}>Winter</option>
            <option value={state.Spring}>Spring</option>
          </select>
        </div>
        <div>
          <label>Select the countries: </label><br></br>
            <select className='selectact' onChange={handleCountry} value={state.id}>
              <option>Select the countries of the activity...</option>
                {countries?.map( e => ( <option key={e.alpha3Code} value={e.id}>{e.name}</option> ) ) }
            </select>
            <button className='botons' onClick={resetCodeCountry}>Remove selected countries</button><br></br>
        </div>
        <div> { state.cId && state.cId.map( e=> ( <ul key={e}>{e}</ul>) ) } </div>
        <button className='btn-submit'> Submit </button>
      </form>
    </div>
  );
};

export default ActivityFunction;