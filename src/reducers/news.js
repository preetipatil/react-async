import { REQUEST_LOADED,REQUEST_LOADING,REQUEST_FAILED_TO_LOAD } from '../action-creators/action-types'
const initialState = {
  loading: false,
  newsfeed: [],
  error: null,
};

const news = (state = initialState, action) => {  // console.log('action' ,action.type );    console.log('state' ,state );
  switch (action.type) {
    case REQUEST_LOADED:
      return { ...state, newsfeed: action.data, loading: false };
    case REQUEST_LOADING:
      return { ...state, loading: true };
    case REQUEST_FAILED_TO_LOAD:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export default news;
