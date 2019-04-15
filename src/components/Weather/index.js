import React from 'react';
import { Link } from 'react-router-dom';

class Weather extends React.Component {
    componentDidMount() {
        this.props.resetHistory();
    }

    render() {
        const historyCityId = this.props.historyCityId;
        let neededCity = this.props.data.filter(item => item.id === +historyCityId);

        const city = neededCity.length ? neededCity[0] : this.props.data[this.props.data.length - 1];

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
    }
}

export default Weather;