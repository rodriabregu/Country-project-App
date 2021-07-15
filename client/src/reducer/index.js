import { 
    ALL_COUNTRIES, 
    GET_COUNTRIES, 
    GET_COUNTRIES_DETAIL, 
    ADD_ACTIVITY, 
    GET_ACTIVITYS, 
    ASC, 
    DSC, 
    POASC, 
    PODSC, 
    REGION_FILTER, 
    ACTIVITY_FILTER 
} from '../actions';

const initialState = {
    countriesAll: [],
    countryDetail: [],
    countryFilter: [],
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
        case ASC: 
        return {
            ...state,
            countriesAll: state.countriesAll.slice().sort( (a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)),
        }
        case DSC: 
        return {
            ...state,
            countriesAll: state.countriesAll.slice().sort( (a,b) => (a.name > b.name) ? -1 : ((b.name > a.name) ? 1 : 0)),
        }
        case POASC: 
        return {
            ...state,
            countriesAll: state.countriesAll.slice().sort( (a,b) => (a.population - b.population))
        }
        case PODSC: 
        return {
            ...state,
            countriesAll: state.countriesAll.slice().sort( (a,b) => (a.population - b.population)).reverse()
        }
        case REGION_FILTER: 
        return {
            ...state,
            countriesAll: state.countriesAll.filter( c => c.region === action.payload )
        }
        case ACTIVITY_FILTER: 
        return {
            ...state,
            countriesAll: state.countriesAll.filter(c => {
                return c.activityCreate?.some(e => e.name === action.payload)
            })
        }

        default: return state;
    }
}