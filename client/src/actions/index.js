import axios from "axios";
import { BASE_URL } from '../constants';

export const ALL_COUNTRIES = 'ALL_COUNTRIES';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
export const GET_ACTIVITYS = 'GET_ACTIVITYS';
export const ASC = 'ASC';
export const DSC = 'DSC';
export const POASC = 'POASC';
export const PODSC = 'PODSC';
export const REGION_FILTER = 'REGION_FILTER';
export const ACTIVITY_FILTER = 'ACTIVITY_FILTER';

export const allCountries = () => {
    return async (dispatch) => {
        const res = await axios.get( BASE_URL )
        dispatch({ type: ALL_COUNTRIES, payload: res.data })
    };
};

export const getCountries = (name) => {
    return async (dispatch) => {
        const res = await axios.get( `http://localhost:3001/countries?name=${name}` )
        
        dispatch({ type: ALL_COUNTRIES, payload: res.data })
    };
};

export function getDetail(id) {
    return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({ type: GET_COUNTRIES_DETAIL, payload: res.data });
    };
  }

export function getActivity(id) {
    return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/activity/${id}`);
      dispatch({ type: GET_COUNTRIES_DETAIL, payload: res.data });
    };
  }

export const filterCountrysAsc = () => {
    return {
        type: ASC
    };
};

export const filterCountrysDsc = () => {
    return {
        type: DSC
    };
};

export const regionFilter = (region) => {
    return {
        type: REGION_FILTER,
        payload: region
    };
};

export const activityFilter = (activity) => {
    return {
        type: ACTIVITY_FILTER,
        activity
    };
};

export const addActivity = (dataAct) => {
    return function (dispatch) {
        return axios
        .post(`http://localhost:3001/activity`, dataAct)
        .then( res => {
            dispatch({ type: ADD_ACTIVITY, payload: res.data });
        });
    };
};
