import { CREATE_URL_ACTIVITY } from '../constants'
import axios from 'axios'

export const createActivity = async ( activityData ) => {
    try {
        const response = await axios({
            url: `${CREATE_URL_ACTIVITY}`,
            method: 'POST',
            data: activityData,
        });
        return response;
    } catch( err ) {
        console.log(err);
    };
};

