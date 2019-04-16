import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

class Weather extends React.Component {
    render() {
        const historyCityId = this.props.historyCityId;
        let neededCity = this.props.data.filter(item => item.id === +historyCityId);

        const city = neededCity.length ? neededCity[0] : this.props.data[this.props.data.length - 1];

        return (
            <React.Fragment>
                {city && <div className="weather">
                    <h1 className="weather__title">Current weather in {city.city}</h1>
                    <p><img src={`${city.conditionIcon}`} alt={`${city.condition}`} /></p>
                    <p>{city.condition}</p>
                    <p className="weather__condition">{city.temp}&#8451;</p>
                    <Link to="/details" className="weather__forecast">Get Forecast fo 3 days</Link>
                </div>
                }
            </React.Fragment>
        );
    }
}

export default Weather;