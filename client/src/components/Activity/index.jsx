import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, addActivity } from "../../actions";
import { Link } from 'react-router-dom'

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

  const handleOnSubmit = async e => {
    /* e.preventDefault(); */
    dispatch(addActivity(state));
    alert('Actividad creada 😎!')
    resetState();
  };

  const handleCountry = e => { setState( {...state, cId:state.cId.concat(e.target.value) } ) } 

  const resetCodeCountry = e => {
    e.preventDefault()
    setState({...state, cId:[]})
  }

  useEffect(() => {
    dispatch(allCountries())
  }, [dispatch], );
  
  return (
    <div>
      <h1>Activitys</h1>
      <Link to='/home'>x Home x</Link>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" maxLength="16" required autoComplete='off' name="name" value={state.name} onChange={handleOnChange} />
        </div>
        <label>Difficulty:</label>
        <select name="difficulty" value={state.difficulty} onChange={handleOnChange} >
          <option value="---">---</option>
          <option value={1}>1 - Very easy</option>
          <option value={2}>2 - Easy</option>
          <option value={3}>3 - Medium</option>
          <option value={4}>4 - Hard</option>
          <option value={5}>5 - Very difficult</option>
        </select>
        <div>
          <label>Duration (in days):</label>
          <input type='number' min="-0" max="31" required autoComplete='off' name="duration" value={state.duration} onChange={handleOnChange} />
        </div>
        <div>
          <label>Season:</label>
          <select name="season" value={state.season} onChange={handleOnChange}>
            <option value="---">---</option>
            <option value={state.Summer}>Summer</option>
            <option value={state.Fall}>Fall</option>
            <option value={state.Winter}>Winter</option>
            <option value={state.Spring}>Spring</option>
          </select>
        </div>
        <div>
          <label>Select the countries: </label><br></br>
            <select onChange={handleCountry} value={state.id}>
              <option>Select the countries of the activity...</option>
                {countries?.map( e => ( <option value={e.id}>{e.name}</option> ) ) }
            </select>
            <button onClick={resetCodeCountry}>Remove selected countries</button><br></br>
        </div>
        <div> { state.cId && state.cId.map( e=> ( <ul key={e}>{e}</ul>) ) } </div>
        <button> Submit </button>
      </form>
    </div>
  );
};

export default ActivityFunction;