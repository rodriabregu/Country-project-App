import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
/* import Header from './components/Header'; */
import Home from './components/Home';
import ActivityFunction from './components/Activity'
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Route path="/" component={Nav}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activity" component={ActivityFunction}/>
      {/* <h1>Henry Countries</h1> */}
    </div>
    </Provider>
  );
};

export default App;