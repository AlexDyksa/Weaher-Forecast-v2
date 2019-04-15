import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Day from '../Day';

class Forecast extends Component {
    render() {
        const historyCityId = this.props.historyCityId;
        console.log(historyCityId);
        let neededCity = this.props.data.filter(item => item.id === +historyCityId);


        const city = neededCity.length ? neededCity[0] : this.props.data[this.props.data.length - 1];

        console.log(city);

        const daysForecast = city.forecastDay.map((day, index) => <Day data={day} key={index} />);

        return (
            <div className="forecast">
                <p>City: {city.city}</p>
                {daysForecast}
                <Link to="/">Back</Link>
            </div>
        );
    }
};

export default Forecast;