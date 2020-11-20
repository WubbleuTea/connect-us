import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Thunk middleware lets us do the double arrow
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  // sets a random id for each alert
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  // Logs out a user if they are logged in too long
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
