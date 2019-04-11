import React, { Component } from 'react';

class Form extends Component {
    handleSubmitForm = e => {
        e.preventDefault();
        // this.getWeatherData();
    };

    handleChangeCityName = e => {
        this.props.changeCityName(e.target.value);
    };

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
            </form>
        );
    }
}

export default Form;