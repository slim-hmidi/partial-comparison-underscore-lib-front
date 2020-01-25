import { FETCH_SUCCESS, FETCH_FAIL } from '../constants/types';

const initialState = {
  data: {},
  error: '',
  loading: true,
};
const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default chartReducer;
