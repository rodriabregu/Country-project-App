import { 
    ALL_COUNTRIES, 
    GET_COUNTRIES, 
    GET_COUNTRIES_DETAIL, 
    ADD_ACTIVITY, 
    GET_ACTIVITYS, 
    ACTIVITY_FILTER 
} from '../actions';

const initialState = {
    countriesAll: [],
    countryDetail: [],
    countryFilter: [],
    activityCreate: [],
    countryShowed: []
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
        case ACTIVITY_FILTER: 
        return {
            ...state,
            countryShowed: action.payload
        }
        default: return state;
    }
};