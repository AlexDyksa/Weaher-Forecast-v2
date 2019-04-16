import React from 'react';

import './styles.css';

const Day = (props) => (
    <div className="day">
        <p className="day__date">{props.data.date}</p>
        <p><img src={`${props.data.day.condition.icon}`} alt={`${props.data.day.condition.text}`} /></p>
        <p>{props.data.day.condition.text}</p>
        <p>Min temp: {props.data.day.mintemp_c}&#8451;</p>
        <p>Max temp: {props.data.day.maxtemp_c}&#8451;</p>
    </div>
);

export default Day;