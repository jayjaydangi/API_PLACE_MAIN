import axios from 'axios';
import ActionTypes from '../actionType';
const homeFeatureList = ActionTypes.HOME_FEATURE_ACTION_TYPE;
import API_BOOK from "../../service/endpoints";


const getFeatureReport = (payload) => ( console.log('homeaction',payload),{
	type: homeFeatureList.GEO_FEATURE_SUCCESS,
	payload,
});

const getProfileReport = (payload) => ( console.log('profile',payload),{
	type: homeFeatureList.GEO_PROFILE_SUCCESS,
	payload,
});




export const getFeatureReportsAction = () => async (dispatch) => {
    try {
        const resp = await axios({
            method: API_BOOK.HOME_API.method,
            url: API_BOOK.HOME_API.url,
        });
        console.log('resp', resp);
  
        if (resp.status === 200) {
            const response = resp?.data?.items;
            console.log('response', response);
  
            dispatch(getFeatureReport(response));
        }
    } catch (error) {
        console.log('Error getting ', error);
    }
  };

  export const getProfileReportsAction = () => async (dispatch) => {
    try {
        const resp = await axios({
            method: API_BOOK.PROFILE_API.method,
            url: API_BOOK.PROFILE_API.url,
            headers:API_BOOK.PROFILE_API.headers
        });
        console.log('respprofile', resp);
  
        if (resp.status === 200) {
            const response = resp?.data;
            console.log('response', response);
  
            dispatch(getProfileReport({response :response, headers:API_BOOK.PROFILE_API.headers}));
        }
    } catch (error) {
        console.log('Error getting ', error);
    }
  };

