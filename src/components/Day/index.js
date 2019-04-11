import React from 'react';

const Day = (props) => (

    <div className="day">
        <p>
            Date: {props.data.date}
            <img src={`${props.data.day.condition.icon}`} alt={`${props.data.day.condition.text}`} />
        </p>
        <p>Min temp: {props.data.day.mintemp_c}</p>
        <p>Max temp: {props.data.day.maxtemp_c}</p>
        <p>Max temp: {props.data.day.maxtemp_c}</p>
    </div>
);

export default Day;