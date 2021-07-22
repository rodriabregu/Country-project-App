import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { About } from './components/About';
import Nav from './components/Nav';
import Home from './components/Home';
import ActivityFunction from './components/Activity';
import CountryDetail from './components/CountryDetail';
import Landing from './components/Landing';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Route path="/:id" component={Nav}/>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/activity" component={ActivityFunction}/>
      <Route exact path='/home/:id' component={CountryDetail}/>
      <Route exact path='/about' component={About}/>
    </div>
    </Provider>
  );
};

export default App;