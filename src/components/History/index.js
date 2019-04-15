import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class History extends Component {
    handleClick = (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('id');
        this.props.chooseHistory(id);
    }

    render() {
        const links = this.props.data.map(city =>
            <Link
                to="/"
                key={city.id}
                data={city}
                onClick={this.handleClick}
                value={city.city}
                id={city.id}
            >
                {city.city}
            </Link>
        );

        return (
            <div className="history">
                {links}
            </div>
        );
    }
};

export default History;