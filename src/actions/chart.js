import { START_FETCH, FETCH_FAIL, FETCH_SUCCESS } from '../constants/types';
import getData from '../apis/chartApis';

const startFetch = () => ({
  type: START_FETCH,
});

const failFetch = (error) => ({
  type: FETCH_FAIL,
  payload: error,
});

const successFetch = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});


const fetchRequest = () => async (dispatch) => {
  dispatch(startFetch());
  return getData()
    .then((response) => {
      const { data } = response;
      return dispatch(successFetch(data));
    }, (error) => {
      dispatch(failFetch(error));
    });
};

export default fetchRequest;
