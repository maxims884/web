import React from 'react';
import './App.css';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails/CountryDetails';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Countries />
                </Route>
                <Route path="/home">
                    <Countries />
                </Route>
                <Route exact path="/country/:countryName">
                    <CountryDetails />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
