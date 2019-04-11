import React from 'react';
import { Link } from 'react-router-dom';

const History = (props) => {
    const links = props.data.map(city => <Link to="/" key={city.id}>{city.city}</Link>);
    return (
        <div className="history">
            {links}
        </div>
    );
};

export default History;