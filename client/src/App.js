import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { store } from './store';
import { Provider } from 'react-redux';
import Nav from './components/Nav';
import Home from './components/Home';
import ActivityFunction from './components/Activity'
import CountryDetail from './components/CountryDetail'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Route path="/" component={Nav}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activity" component={ActivityFunction}/>
      <Route exact path='/home/:id' component={CountryDetail}/>
    </div>
    </Provider>
  );
};

export default App;