import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { AnimatePresence } from "framer-motion";
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
      <AnimatePresence exitBeforeEnter>
          <Route path="/:id">
            <Nav />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/activity">
            <ActivityFunction/>
          </Route>
          <Route exact path='/home/:id'>
            <CountryDetail/>
          </Route>
          <Route exact path='/about'>
            <About/>
          </Route>
      </AnimatePresence>
    </div>
    </Provider>
  );
};

export default App;