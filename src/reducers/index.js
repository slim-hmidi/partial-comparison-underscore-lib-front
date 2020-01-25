import { combineReducers } from 'redux';
import chartReducer from './chart';

const reducer = combineReducers({
  chart: chartReducer,
});

export default reducer;
