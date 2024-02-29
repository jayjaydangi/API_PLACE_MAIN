import ActionTypes from "../actionType";
const homeFeatureActionTypes = ActionTypes.HOME_FEATURE_ACTION_TYPE;

const initialState = {
  homefeatureData: [],
  profilefeatureData:[]
};
const homeFeatureReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log('reduserdata',payload);
  switch (type) {
    case homeFeatureActionTypes.GEO_FEATURE_SUCCESS:
      return {
        ...state,
        homefeatureData: payload,
      };
      case homeFeatureActionTypes.GEO_PROFILE_SUCCESS:
      return {
        ...state,
        profilefeatureData: payload,
      };
    default:
      return state;
  }
};

export default homeFeatureReducer;