import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Form from './containers/formContainer';
import Weather from './containers/weatherContainer';
import Forecast from './containers/forecastContainer';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Route path="/" component={Form} exact />
                <Switch>
                    <Route path="/" component={Weather} exact />
                    <Route path="/details" component={Forecast} />
                </Switch>
            </div>
        );
    }
}

export default App;
