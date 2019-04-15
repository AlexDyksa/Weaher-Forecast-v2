import React, { Component } from 'react';

import History from '../../containers/historyContainer';

class Form extends Component {
    handleSubmitForm = e => {
        e.preventDefault();
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

        const tranformedData = {
            id: Date.now(),
            city: data.location.name,
            country: data.location.country,
            condition: data.current.condition.text,
            conditionIcon: data.current.condition.icon,
            temp: data.current.temp_c,
            forecastDay: data.forecast.forecastday
        };
        this.props.resetHistory();
        this.props.fetchData(tranformedData);
    }


    render() {
        return (
            <form action="" className="form" onSubmit={this.handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={this.props.enteredCityName}
                    onChange={this.handleChangeCityName}
                />
                <button
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