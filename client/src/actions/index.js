import axios from "axios";
import { BASE_URL, GET_URL_COUNTRIES } from '../constants';

export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const GET_ACTIVITYS = 'GET_ACTIVITYS';

export const allCountries = () => {
    return async (dispatch) => {
        const response = await axios.get( BASE_URL )
        dispatch({ type: ALL_COUNTRIES, payload: response.data })
    };
};

export const getCountries = (name) => {
    return async (dispatch) => {
        const response = await axios.get( BASE_URL )
        if ( name ) {
            response = await axios.get( GET_URL_COUNTRIES + name )
        }
        dispatch({ type: ALL_COUNTRIES, payload: response.data })
    };
};


/**
 * 
 * @param {*} name 
 * @param {*} difficulty 
 * @param {*} duration 
 * @param {*} season 
 * @returns 
 */
export const addActivity = (dataAct) => {
    return function (dispatch) {
        return axios
        .post(`http://localhost:3001/activity`, dataAct)
        .then( res => {
            dispatch({ type: ADD_ACTIVITY, payload: res.data });
        
        });
    };
};
