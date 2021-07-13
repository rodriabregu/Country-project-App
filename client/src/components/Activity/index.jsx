import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addActivity } from "../../actions";

function ActivityFunction() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    cId: [],
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const res = {
      name: state.name,
      difficulty: state.difficulty,
      duration: state.duration,
      season: state.season,
      cId: state.cId,
    };
    dispatch(addActivity(res));
  };

  return (
    <div>
      <h1>Acivitys</h1>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={state.name} onChange={handleOnChange} />
        </div>
        <label>Difficulty:</label>
        <select name="difficulty" value={state.difficulty} onChange={handleOnChange} >
          <option value="here">-Here-</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div>
          <label>Duration:</label>
          <input name="duration" value={state.duration} onChange={handleOnChange} />
        </div>
        <div>
          <label>Season:</label>
          <select name="season" value={state.season} onChange={handleOnChange}>
            <option value="---">-Here-</option>
            <option value={state.summer}>Summer</option>
            <option value={state.Autumn}>Autumn</option>
            <option value={state.Winter}>Winter</option>
            <option value={state.Spring}>Spring</option>
          </select>
        </div>
        <div>
          <label>Codigo pais:</label>
          <input name="cId" value={state.cId} onChange={handleOnChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ActivityFunction;