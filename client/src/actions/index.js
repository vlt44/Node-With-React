import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  console.log("Fetching current user...");

  const res = await axios.get('/api/current_user');
  console.log("Response:", res.data);
  
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleCheckoutToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
}