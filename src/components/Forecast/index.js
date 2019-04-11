import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Day from '../Day';

class Forecast extends Component {
    render() {
        const lastItem = this.props.data[this.props.data.length - 1];
        const daysForecast = lastItem.forecastDay.map((day, index) => <Day data={day} key={index} />);

        return (
            <div className="forecast">
                {daysForecast}
                <Link to="/">Back</Link>
            </div>
        );
    }
};

export default Forecast;