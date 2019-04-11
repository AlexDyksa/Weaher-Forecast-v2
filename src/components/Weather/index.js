import React from 'react';
import { Link } from 'react-router-dom';

const Weather = (props) => {
    const city = props.data[props.data.length - 1];

    return (
        <React.Fragment>
            {city && <div className="weather">
                <p>City: {city.city}</p>
                <p>Country: {city.country}</p>
                <p>Condition: <img src={`${city.conditionIcon}`} alt={`${city.condition}`} /></p>
                <p>Temperature: {city.temp}</p>

                <Link to="/details">Details</Link>
            </div>
            }
        </React.Fragment>
    );
};

export default Weather;