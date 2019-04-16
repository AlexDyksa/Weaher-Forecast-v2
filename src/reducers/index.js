import { CHANGED_CITY_NAME, FETCHED_DATA, CHOOSE_HISTORY, RESET_HISTORY } from '../actions/types';

const initialState = {
    enteredCityName: '',
    city: [],
    historyCityId: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CITY_NAME:
            return {
                ...state,
                enteredCityName: action.payload
            };
        case FETCHED_DATA:
            let city = null;
            if (state.city.length < 4) {
                city = [...state.city, action.payload];
            } else {
                city = state.city.slice(1);
                city.push(action.payload);
            }
            return {
                ...state,
                city: city
            };
        case CHOOSE_HISTORY:
            return {
                ...state,
                historyCityId: action.payload
            };
        case RESET_HISTORY:
            return {
                ...state,
                historyCityId: action.payload
            };
        default:
            return state;
    }
};


export default rootReducer;