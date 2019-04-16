import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Day from '../Day';
import './styles.css';

class Forecast extends Component {
    render() {
        const historyCityId = this.props.historyCityId;
        let historyCity = this.props.data.filter(item => item.id === +historyCityId);


        const city = historyCity.length ? historyCity[0] : this.props.data[this.props.data.length - 1];


        const daysForecast = city.forecastDay.map((day, index) => <Day data={day} key={index} />);

        return (
            <div className="forecast">
                <h1 className="forecast__title">Weather Forecast for {city.city}</h1>
                <div className="forecast__days">
                    {daysForecast}
                </div>
                <Link to="/" className="forecast__link-back">Back</Link>
            </div>
        );
    }
};

export default Forecast;