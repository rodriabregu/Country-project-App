import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, addActivity } from "../../redux/actions";
import { motion } from "framer-motion";
import sweet from 'sweetalert';
import './form-act.css';

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
    },
  },
  exit: {
    y: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

function ActivityFunction() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countriesAll)

  const alertsweet = () => {
    sweet({
      title: '¡Activity created!',
      text: '¡' + state.name + 'was created successfully!',
      icon: 'success',
      button: 'To accept',
      timer: "6000",
    })
  }

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
    e.preventDefault();
    dispatch(addActivity(state));
    alertsweet();
    /* sweet('Actividad creada 😎!') */
    resetState();
  };

  useEffect(() => {
    dispatch(allCountries())
  }, [dispatch], );
  
  return (
    <motion.div className='form-register'
    variants={containerVariants}
    initial="hidden"
    animate="show"
    exit="exit">
      <h1>Activitys</h1>
      <br/>
      <form onSubmit={handleOnSubmit}>
        <div>
          <input className='controls' placeholder="Enter the name of the activity..." type="text" maxLength="16" required autoComplete='off' name="name" value={state.name} onChange={handleOnChange} />
        </div>
        <div>
          <input className='controls' placeholder="Duration of the activity (in days)..." type='number' min="-0" max="31" required autoComplete='off' name="duration" value={state.duration} onChange={handleOnChange} />
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
          <select className='selectact' name="season" value={state.season} onChange={handleOnChange}>
            <option value="---">Season:</option>
            <option value={state.Summer}>Summer</option>
            <option value={state.Fall}>Fall</option>
            <option value={state.Winter}>Winter</option>
            <option value={state.Spring}>Spring</option>
          </select>
        </div>
        <div>
            <select className='selectact' onChange={handleCountry} value={state.id}>
              <option>Select the countries of the activity...</option>
                {countries?.map( e => ( <option key={e.alpha3Code} value={e.id}>{e.name}</option> ) ) }
            </select>
            <button className='botons' onClick={resetCodeCountry}>Remove selected countries</button><br></br>
        </div>
        <div> { state.cId && state.cId.map( e=> ( <ul className='countryscreates' key={e}>{e}</ul>) ) } </div>
        <button className='btn-submit'> Submit </button>
      </form>
    </motion.div>
  );
};

export default ActivityFunction;