import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Day from '../Day';

class Forecast extends Component {
    render() {
        const daysForecast = this.props.data.map((day, index) => <Day data={day} key={index} />);

        return (
            <div className="forecast">
                {daysForecast}
                <Link to="/">Back</Link>
            </div>
        );
    }
};

export default Forecast;