import { CHANGED_CITY_NAME, FETCHED_DATA } from '../actions/types';

const initialState = {
    cities: [],
    enteredCityName: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGED_CITY_NAME:
            return { ...state, enteredCityName: action.payload };
        case FETCHED_DATA:
            return { ...state, cities: action.payload };
        default:
            return state;
    }
};


export default rootReducer;
