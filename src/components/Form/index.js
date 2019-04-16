import React, { Component } from 'react';

import History from '../../containers/historyContainer';
import './styles.css';

class Form extends Component {
    handleSubmitForm = e => {
        e.preventDefault();
        this.props.resetHistory();
        this.getWeatherData();
    };

    handleChangeCityName = e => {
        this.props.changeCityName(e.target.value);
    };

    getWeatherData = async () => {
        const daysOfForecast = 3;
        const API_KEY = 'b7a955a0c43d4bc482261947191104';
        const API_URL = `http://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${this.props.enteredCityName}&days=${daysOfForecast}`;

        const response = await fetch(API_URL);
        const data = await response.json();

        const transformedData = {
            id: Date.now(),
            city: data.location.name,
            country: data.location.country,
            condition: data.current.condition.text,
            conditionIcon: data.current.condition.icon,
            temp: data.current.temp_c,
            forecastDay: data.forecast.forecastday
        };
        this.props.fetchData(transformedData);
    }


    render() {
        return (
            <form action="" className="app__form" onSubmit={this.handleSubmitForm}>
                <input
                    type="text"
                    className="app__search"
                    placeholder="Enter City Name"
                    value={this.props.enteredCityName}
                    onChange={this.handleChangeCityName}
                />
                <button
                    className={!this.props.enteredCityName ? 'app__submit app__submit-inactive' : 'app__submit'}
                    disabled={!this.props.enteredCityName ? true : false}
                >
                    Get Forecast
                </button>
                <History />
            </form>
        );
    }
}

export default Form;