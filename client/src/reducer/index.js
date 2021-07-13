import { ALL_COUNTRIES, GET_COUNTRIES, GET_COUNTRIES_DETAIL, ADD_ACTIVITY, GET_ACTIVITYS } from '../actions';

const initialState = {
    countriesAll: [],
    countryDetail: [],
    activityCreate: []
};

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case ALL_COUNTRIES:
            return {
                ...state,
                countriesAll: action.payload,
            };
        case GET_COUNTRIES:
            return {
                ...state,
                countriesAll: action.payload,
            };
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                countryDetail: action.payload,
            }
        case ADD_ACTIVITY: 
        return {
            ...state,
            activityCreate: action.payload,
        }
        case GET_ACTIVITYS: 
        return {
            ...state,
            activityCreate: action.payload,
        }
        default: return state;
    }
}