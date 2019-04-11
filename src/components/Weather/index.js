import React from 'react';
import { Link } from 'react-router-dom';

const Weather = (props) => {
    return (
        <div className="weather">
            <p>City: {props.data.city}</p>
            <p>Country: {props.data.country}</p>
            <p>Condition: <img src={`${props.data.conditionIcon}`} alt={`${props.data.condition}`} /></p>
            <p>Temperature: {props.data.temp}</p>

            {props.data && <Link to="/details">Details</Link>}
        </div>
    );
};

export default Weather;