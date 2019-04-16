import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Form from './containers/formContainer';
import Weather from './containers/weatherContainer';
import Forecast from './containers/forecastContainer';
import NotFound from './components/NotFound';
import Logo from './components/Logo';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="app__inner">
                    <Logo />
                    <div className="app__content">
                        <Route path="/" component={Form} exact />
                        <Switch>
                            <Route path="/" component={Weather} exact />
                            <Route path="/details" component={Forecast} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
