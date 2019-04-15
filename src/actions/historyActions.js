import { CHOOSE_HISTORY, RESET_HISTORY } from './types';

export const chooseHistory = cityId => ({
    type: CHOOSE_HISTORY,
    payload: cityId
});

export const resetHistory = () => ({
    type: RESET_HISTORY,
    payload: ''
});